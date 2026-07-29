import { motion } from "framer-motion";
import { FaComments, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import type { IconType } from "react-icons";

import { useLanguage } from "../context/LanguageContext";

// Les icônes restent fixes ; seuls les libellés sont traduits (mappés par index)
const stepIcons: IconType[] = [FaComments, FaPencilRuler, FaCode, FaRocket];

const ServiceProcess = () => {
    const { t } = useLanguage();
    const { process } = t.services;

    return (
        <div className="w-full mt-10 xl:mt-14">
            <div className="relative flex flex-col sm:flex-row gap-8 sm:gap-4">
                {/* ligne de connexion qui se dessine progressivement (desktop uniquement) */}
                <div className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-white/10 overflow-hidden">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                        className="h-full w-full bg-accent/60"
                    />
                </div>

                {process.map((step, i) => {
                    const Icon = stepIcons[i % stepIcons.length];
                    return (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.4 }}
                            className="group relative flex-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                        >
                            <motion.div
                                whileHover={{ scale: 1.12, rotate: 6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                                className="relative z-10 w-12 h-12 rounded-full bg-[#12141c] border border-accent/40 flex items-center justify-center text-accent mb-3 shadow-[0_0_16px_-4px] shadow-accent/60 group-hover:shadow-accent"
                            >
                                <Icon className="text-lg" />
                            </motion.div>
                            <span className="text-xs text-accent font-semibold mb-1">
                                0{i + 1}
                            </span>
                            <h4 className="text-white/90 font-medium mb-1">{step.title}</h4>
                            <p className="text-xs text-white/50 max-w-[180px]">{step.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceProcess;