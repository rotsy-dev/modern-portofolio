import { motion } from "framer-motion";
import {
    FaReact,
    FaAngular,
    FaNodeJs,
    FaPhp,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiVuedotjs,
    SiIonic,
    SiTypescript,
    SiSymfony,
    SiGraphql,
    SiMysql,
    SiKubernetes,
    SiCypress,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
    Icon: IconType;
    label: string;
    color: string;
}

// Technologies mises en avant dans le bandeau — à ajuster selon les projets présentés
const techs: TechItem[] = [
    { Icon: FaReact, label: "React", color: "#61DAFB" },
    { Icon: SiVuedotjs, label: "Vue.js", color: "#4FC08D" },
    { Icon: FaAngular, label: "Angular", color: "#DD0031" },
    { Icon: SiIonic, label: "Ionic", color: "#3880FF" },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
    { Icon: FaNodeJs, label: "Node.js", color: "#339933" },
    { Icon: FaPhp, label: "PHP", color: "#777BB4" },
    { Icon: SiSymfony, label: "Symfony", color: "#E8E8E8" },
    { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
    { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
    { Icon: FaDocker, label: "Docker", color: "#2496ED" },
    { Icon: SiKubernetes, label: "Kubernetes", color: "#326CE5" },
    { Icon: FaAws, label: "AWS", color: "#FF9900" },
    { Icon: SiCypress, label: "Cypress", color: "#69D3A0" },
];

const TechMarquee = () => {
    // dupliqué pour une boucle visuellement continue
    const items = [...techs, ...techs];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full overflow-hidden mt-10 xl:mt-14 py-4 border-y border-white/10"
        >
            {/* fondus latéraux pour masquer les bords de la boucle */}
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-primary/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-primary/80 to-transparent z-10 pointer-events-none" />

            <div className="tech-marquee-track flex w-max gap-10">
                {items.map(({ Icon, label, color }, i) => (
                    <div
                        key={`${label}-${i}`}
                        className="flex items-center gap-2 text-white/50 whitespace-nowrap"
                    >
                        <Icon style={{ color }} className="text-xl shrink-0" />
                        <span className="text-sm">{label}</span>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes tech-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-marquee-track {
          animation: tech-marquee-scroll 26s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
        </motion.div>
    );
};

export default TechMarquee;