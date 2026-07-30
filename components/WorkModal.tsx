"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

import ProjectLogo from "./ProjectLogo";
import type { WorkProject } from "./WorkSlider";
import TechIcon from "./techIcons";

interface WorkModalProps {
    project: WorkProject | null;
    onClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 24 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 15,
        transition: { duration: 0.15 },
    },
};

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0 },
};

const WorkModal = ({ project, onClose }: WorkModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!project) return;

        // 1. Blocage du défilement d'arrière-plan
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // 2. Focus initial sur le bouton de fermeture
        const timer = setTimeout(() => {
            closeButtonRef.current?.focus();
        }, 50);

        // 3. Gestion de la touche Échap et Piège de Focus (Tab / Shift+Tab)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key === "Tab" && modalRef.current) {
                const focusables = modalRef.current.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );

                if (focusables.length === 0) return;

                const firstElement = focusables[0];
                const lastElement = focusables[focusables.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            clearTimeout(timer);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden
                    />

                    <motion.div
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="work-modal-title"
                        variants={modalVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-primary shadow-2xl"
                    >
                        {/* bandeau dégradé en haut, reprend les couleurs du projet */}
                        <div
                            className="h-2 w-full"
                            style={{
                                background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                            }}
                            aria-hidden
                        />

                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={onClose}
                            className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors duration-300 hover:bg-accent hover:text-primary"
                            aria-label="Fermer"
                        >
                            <RxCross2 className="text-lg" />
                        </button>

                        <div className="flex flex-col gap-6 p-6 sm:p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <ProjectLogo
                                    meta={project}
                                    className="h-16 w-16 shadow-lg shadow-black/30"
                                    iconClassName="text-3xl"
                                />
                                <div className="pt-1">
                                    <h3 id="work-modal-title" className="text-xl font-semibold leading-snug">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/50 mt-1">{project.company}</p>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.18 }}
                                className="text-white/70 leading-relaxed"
                            >
                                {project.description}
                            </motion.p>

                            {project.highlights && project.highlights.length > 0 && (
                                <motion.ul
                                    variants={listVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="flex flex-col gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                                >
                                    {project.highlights.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-start gap-x-2.5 text-sm text-white/80"
                                        >
                                            <span
                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                                style={{ background: project.gradient[0] }}
                                                aria-hidden
                                            />
                                            {point}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                                    Main stack
                                </span>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.technologies.map((tech, i) => (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.32 + i * 0.04 }}
                                            className="flex items-center gap-x-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent"
                                        >
                                            <TechIcon tech={tech} />
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WorkModal;