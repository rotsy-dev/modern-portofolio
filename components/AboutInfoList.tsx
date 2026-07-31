
import { motion } from "framer-motion";
import { FaGraduationCap, FaCircle, FaBriefcase, FaLanguage } from "react-icons/fa";

export interface AboutInfoItem {
  title: string;
  stage?: string;
}

type Variant = "languages" | "timeline" | "credentials";

interface AboutInfoListProps {
  items: AboutInfoItem[];
  variant: Variant;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

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
  // --- Langues ---
  if (variant === "languages") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col gap-y-3.5"
      >
        {items.map((item) => {
          const level = parseLevel(item.stage);
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="group w-full flex items-center justify-between gap-x-4 p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-md hover:shadow-accent/10"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <FaLanguage className="text-base" />
                </div>
                <span className="text-white/90 font-medium text-sm sm:text-base">
                  {item.title}
                </span>
              </div>

              {level !== null ? (
                <div className="flex items-center gap-x-2 bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
                  {Array.from({ length: 5 }).map((_, dotI) => (
                    <FaCircle
                      key={dotI}
                      className={`text-[8px] transition-all duration-300 ${
                        dotI < level
                          ? "text-accent drop-shadow-[0_0_4px_rgba(241,48,36,0.6)]"
                          : "text-white/15"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                item.stage && (
                  <span className="text-xs uppercase font-medium tracking-wide text-accent border border-accent/30 bg-accent/10 rounded-full px-3 py-1">
                    {item.stage}
                  </span>
                )
              )}
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  // --- Expérience (Timeline) ---
  if (variant === "timeline") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full relative pl-6 sm:pl-8 flex flex-col gap-y-5"
      >
        {/* Ligne verticale néon */}
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-white/10" />

        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="group relative flex flex-col gap-1 p-4 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm text-left transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-accent/10"
          >
            {/* Puce néon lumineuse */}
            <span className="absolute -left-[23px] sm:-left-[27px] top-5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-accent shadow-[0_0_10px_2px_rgba(241,48,36,0.6)] transition-transform duration-300 group-hover:scale-125" />

            <div className="flex items-center gap-x-2 text-accent text-xs font-semibold uppercase tracking-wider">
              <FaBriefcase className="text-xs shrink-0" />
              <span>{item.stage ?? "Expérience"}</span>
            </div>

            <div className="text-white/95 font-semibold text-sm sm:text-base leading-snug">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // --- Diplômes & Formations (Credentials) ---
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5"
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-start gap-x-3.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 text-left transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-accent/10"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            <FaGraduationCap className="text-xl" />
          </div>

          <div className="flex flex-col">
            <div className="text-white/95 text-xs sm:text-sm font-semibold leading-snug">
              {item.title}
            </div>
            {item.stage && (
              <div className="text-xs text-white/50 mt-1 font-medium group-hover:text-white/70 transition-colors duration-300">
                {item.stage}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutInfoList;