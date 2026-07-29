import { useEffect, useRef, useState, useCallback } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { IconType } from "react-icons";

export interface CloudIcon {
    Icon: IconType;
    label: string;
    color: string;
}

interface IconCloudProps {
    icons: CloudIcon[];
    /** Taille maximale du canvas en px (carré). Le composant devient plus petit si le conteneur est plus étroit. */
    maxSize?: number;
    /** Taille de chaque icône en px, à maxSize */
    iconSize?: number;
}

interface SphereItem {
    id: number;
    x: number;
    y: number;
    z: number;
    img: HTMLImageElement;
    label: string;
}

interface ProjectedItem extends SphereItem {
    screenX: number;
    screenY: number;
    scale: number;
    depthZ: number;
}

// Convertit une icône react-icons en data-URL SVG utilisable dans un <img>/canvas
const iconToDataUrl = (Icon: IconType, color: string) => {
    const svgString = renderToStaticMarkup(<Icon color={color} size={40} />);
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
};

const IconCloud = ({ icons, maxSize = 420, iconSize = 30 }: IconCloudProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const itemsRef = useRef<SphereItem[]>([]);
    const projectedRef = useRef<ProjectedItem[]>([]);
    const rotationRef = useRef({ x: 0, y: 0 });
    const targetRotationRef = useRef({ x: 0, y: 0 });
    const draggingRef = useRef(false);
    const lastPointerRef = useRef({ x: 0, y: 0 });
    const hoveredIdRef = useRef<number | null>(null);
    const hoverAnimRef = useRef<number[]>([]); // valeur d'animation 0->1 par icône (id = index)

    const [loaded, setLoaded] = useState(false);
    const [size, setSize] = useState(maxSize);
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

    // Taille responsive : le canvas prend la largeur du conteneur, plafonnée à maxSize
    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const observer = new ResizeObserver((entries) => {
            const width = entries[0]?.contentRect.width ?? maxSize;
            setSize(Math.max(180, Math.min(width, maxSize)));
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, [maxSize]);

    // 1. Distribution des icônes sur la sphère (spirale de Fibonacci) + préchargement des images
    useEffect(() => {
        let cancelled = false;
        const n = icons.length;
        const items: SphereItem[] = [];

        const loadPromises = icons.map(({ Icon, color, label }, i) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = iconToDataUrl(Icon, color);

                const phi = Math.acos(-1 + (2 * i) / n);
                const theta = Math.sqrt(n * Math.PI) * phi;

                items.push({
                    id: i, // identifiant stable, indépendant de l'ordre de rendu / tri par profondeur
                    x: Math.cos(theta) * Math.sin(phi),
                    y: Math.sin(theta) * Math.sin(phi),
                    z: Math.cos(phi),
                    img,
                    label,
                });
            });
        });

        Promise.all(loadPromises).then(() => {
            if (!cancelled) {
                itemsRef.current = items;
                hoverAnimRef.current = items.map(() => 0);
                setLoaded(true);
            }
        });

        return () => {
            cancelled = true;
        };
    }, [icons]);

    // 2. Boucle d'animation (rotation auto + rendu canvas + hit-test hover)
    useEffect(() => {
        if (!loaded) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const radius = size * 0.42; // rayon de la sphère : plus grand = icônes plus espacées
        const focal = size * 0.85; // distance focale : plus petit = effet de profondeur plus marqué

        let raf: number;

        const render = () => {
            if (!draggingRef.current) {
                targetRotationRef.current.y += 0.0025;
            }
            rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.08;
            rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.08;

            const { x: rx, y: ry } = rotationRef.current;
            const cosX = Math.cos(rx), sinX = Math.sin(rx);
            const cosY = Math.cos(ry), sinY = Math.sin(ry);

            ctx.clearRect(0, 0, size, size);

            // halo radial pour renforcer la lecture "planète"
            const glow = ctx.createRadialGradient(
                size / 2, size / 2, radius * 0.15,
                size / 2, size / 2, radius * 1.2
            );
            glow.addColorStop(0, "rgba(255,255,255,0.06)");
            glow.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, radius * 1.2, 0, Math.PI * 2);
            ctx.fill();

            const projected: ProjectedItem[] = itemsRef.current.map((item) => {
                const x0 = item.x * radius;
                const y0 = item.y * radius;
                const z0 = item.z * radius;

                const x1 = x0 * cosY - z0 * sinY;
                const z1 = x0 * sinY + z0 * cosY;
                const y1 = y0 * cosX - z1 * sinX;
                const z2 = y0 * sinX + z1 * cosX;

                const perspective = focal / (focal + z2);
                return {
                    ...item,
                    screenX: size / 2 + x1 * perspective,
                    screenY: size / 2 + y1 * perspective,
                    scale: perspective,
                    depthZ: z2,
                };
            });

            projected.sort((a, b) => a.depthZ - b.depthZ);
            projectedRef.current = projected;

            projected.forEach((p) => {
                const isHovered = hoveredIdRef.current === p.id;

                // anime la valeur de hover (grossissement / lumière progressifs), une seule icône à la fois
                const current = hoverAnimRef.current[p.id] ?? 0;
                const targetVal = isHovered ? 1 : 0;
                hoverAnimRef.current[p.id] = current + (targetVal - current) * 0.2;
                const hoverT = hoverAnimRef.current[p.id];

                const depthOpacity = Math.max(0.2, Math.min(1, (p.depthZ + radius) / (radius * 2)));
                const opacity = Math.min(1, depthOpacity + hoverT * 0.5);
                const s = iconSize * (size / maxSize) * p.scale * (1 + hoverT);

                if (hoverT > 0.02) {
                    ctx.save();
                    ctx.shadowColor = "rgba(255,255,255,0.95)";
                    ctx.shadowBlur = 22 * hoverT;
                }

                ctx.globalAlpha = opacity;
                if (p.img.complete && p.img.naturalWidth > 0) {
                    ctx.drawImage(p.img, p.screenX - s / 2, p.screenY - s / 2, s, s);
                }
                ctx.globalAlpha = 1;

                if (hoverT > 0.02) {
                    ctx.restore();
                }
            });

            raf = requestAnimationFrame(render);
        };

        raf = requestAnimationFrame(render);
        return () => cancelAnimationFrame(raf);
    }, [loaded, size, maxSize, iconSize]);

    // Hit-test : trouve l'icône la plus proche du pointeur (survol souris ou tap tactile)
    const hitTest = useCallback((clientX: number, clientY: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const rect = canvas.getBoundingClientRect();
        const px = clientX - rect.left;
        const py = clientY - rect.top;

        let closestId: number | null = null;
        let closestDist = Infinity;

        projectedRef.current.forEach((p) => {
            const dx = p.screenX - px;
            const dy = p.screenY - py;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const hitRadius = (iconSize * (size / maxSize) * p.scale) / 2 + 6;
            if (dist < hitRadius && dist < closestDist) {
                closestDist = dist;
                closestId = p.id;
            }
        });

        return closestId;
    }, [iconSize, size, maxSize]);

    // 3. Interaction drag + survol/tap
    const onPointerDown = useCallback((e: React.PointerEvent) => {
        draggingRef.current = true;
        lastPointerRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (draggingRef.current) {
            const dx = e.clientX - lastPointerRef.current.x;
            const dy = e.clientY - lastPointerRef.current.y;
            lastPointerRef.current = { x: e.clientX, y: e.clientY };
            targetRotationRef.current.y += dx * 0.005;
            targetRotationRef.current.x += dy * 0.005;
        }

        const id = hitTest(e.clientX, e.clientY);
        hoveredIdRef.current = id;
        setHoveredLabel(id !== null ? itemsRef.current[id]?.label ?? null : null);
    }, [hitTest]);

    const stopDrag = useCallback(() => {
        draggingRef.current = false;
    }, []);

    const onPointerLeave = useCallback(() => {
        draggingRef.current = false;
        hoveredIdRef.current = null;
        setHoveredLabel(null);
    }, []);

    return (
        <div ref={wrapperRef} className="w-full max-w-[420px] mx-auto">
            <canvas
                ref={canvasRef}
                style={{ width: size, height: size, touchAction: "none", cursor: "grab" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={stopDrag}
                onPointerLeave={onPointerLeave}
                className="mx-auto block"
            />
            {hoveredLabel && (
                <div className="text-center text-xs text-white/70 mt-1 h-4">{hoveredLabel}</div>
            )}
        </div>
    );
};

export default IconCloud;