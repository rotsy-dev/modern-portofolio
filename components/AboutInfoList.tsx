import { motion } from "framer-motion";
import { FaGraduationCap, FaCircle } from "react-icons/fa";

export interface AboutInfoItem {
    title: string;
    stage?: string;
}

type Variant = "languages" | "timeline" | "credentials";

interface AboutInfoListProps {
    items: AboutInfoItem[];
    variant: Variant;
}

// Essaie de déduire un niveau (1 à 5) à partir du libellé de langue (FR/EN, CECR)
const LEVEL_KEYWORDS: { keywords: string[]; level: number }[] = [
    { keywords: ["natif", "native", "maternelle", "mother tongue"], level: 5 },
    { keywords: ["courant", "fluent", "bilingue", "bilingual"], level: 5 },
    { keywords: ["avancé", "advanced", "c1", "c2"], level: 4 },
    { keywords: ["intermédiaire", "intermediate", "b1", "b2"], level: 3 },
    { keywords: ["débutant", "beginner", "notions", "a1", "a2"], level: 2 },
];

const parseLevel = (stage?: string): number | null => {
    if (!stage) return null;
    const lower = stage.toLowerCase();
    const match = LEVEL_KEYWORDS.find((entry) =>
        entry.keywords.some((kw) => lower.includes(kw))
    );
    return match ? match.level : null;
};

const AboutInfoList = ({ items, variant }: AboutInfoListProps) => {
    // --- Langues : nom + pastilles de niveau (ou badge texte si niveau non reconnu) ---
    if (variant === "languages") {
        return (
            <div className="w-full flex flex-col gap-y-4">
                {items.map((item, i) => {
                    const level = parseLevel(item.stage);
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.35 }}
                            className="w-full flex items-center justify-between gap-x-4"
                        >
                            <span className="text-white/80 font-medium">{item.title}</span>
                            {level !== null ? (
                                <span className="flex items-center gap-x-1.5">
                                    {Array.from({ length: 5 }).map((_, dotI) => (
                                        <FaCircle
                                            key={dotI}
                                            className={`text-[7px] transition-colors duration-300 ${dotI < level ? "text-accent" : "text-white/15"
                                                }`}
                                        />
                                    ))}
                                </span>
                            ) : (
                                item.stage && (
                                    <span className="text-xs uppercase tracking-wide text-white/50 border border-white/15 rounded-full px-2.5 py-1">
                                        {item.stage}
                                    </span>
                                )
                            )}
                        </motion.div>
                    );
                })}
            </div>
        );
    }

    // --- Expérience : timeline verticale avec point lumineux ---
    if (variant === "timeline") {
        return (
            <div className="w-full relative pl-6">
                <div className="absolute left-[5px] top-1 bottom-1 w-px bg-white/10" />
                <div className="flex flex-col gap-y-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.35 }}
                            className="relative text-left"
                        >
                            <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_1px] shadow-accent" />
                            <div className="text-white/90 font-medium">{item.title}</div>
                            {item.stage && (
                                <div className="text-xs text-white/50 mt-0.5">{item.stage}</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    // --- Diplômes : petites cartes avec icône ---
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex items-start gap-x-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-left transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.05]"
                >
                    <FaGraduationCap className="text-accent text-lg mt-0.5 shrink-0" />
                    <div>
                        <div className="text-white/90 text-sm font-medium leading-snug">{item.title}</div>
                        {item.stage && <div className="text-xs text-white/50 mt-1">{item.stage}</div>}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AboutInfoList;