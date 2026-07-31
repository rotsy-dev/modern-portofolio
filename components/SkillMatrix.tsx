
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import type { IconType } from "react-icons";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import {
  SiVuedotjs,
  SiIonic,
  SiTypescript,
  SiSymfony,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiFirebase,
  SiCypress,
  SiJest,
  SiGithubactions,
  SiGitlab,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "DevOps" | "QA & CI/CD";
  Icon: IconType;
  color: string;
}

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React", category: "Frontend", Icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", category: "Frontend", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", category: "Frontend", Icon: FaJs, color: "#F7DF1E" },
  { name: "Vue.js", category: "Frontend", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", category: "Frontend", Icon: FaAngular, color: "#DD0031" },
  { name: "Ionic", category: "Frontend", Icon: SiIonic, color: "#3880FF" },

  // Backend
  { name: "Node.js", category: "Backend", Icon: FaNodeJs, color: "#339933" },
  { name: "PHP", category: "Backend", Icon: FaPhp, color: "#777BB4" },
  { name: "Symfony", category: "Backend", Icon: SiSymfony, color: "#E8E8E8" },
  { name: "GraphQL", category: "Backend", Icon: SiGraphql, color: "#E10098" },

  // Databases
  { name: "MySQL", category: "Databases", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", category: "Databases", Icon: SiPostgresql, color: "#6E9EFF" },
  { name: "MongoDB", category: "Databases", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", category: "Databases", Icon: SiFirebase, color: "#FFCA28" },

  // DevOps & Cloud
  { name: "Docker", category: "DevOps", Icon: FaDocker, color: "#2496ED" },
  { name: "Kubernetes", category: "DevOps", Icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", category: "DevOps", Icon: FaAws, color: "#FF9900" },
  { name: "Git", category: "DevOps", Icon: FaGitAlt, color: "#F05032" },

  // QA & CI/CD
  { name: "Cypress", category: "QA & CI/CD", Icon: SiCypress, color: "#69D3A0" },
  { name: "Jest", category: "QA & CI/CD", Icon: SiJest, color: "#E5534B" },
  { name: "GitHub Actions", category: "QA & CI/CD", Icon: SiGithubactions, color: "#2088FF" },
  { name: "GitLab", category: "QA & CI/CD", Icon: SiGitlab, color: "#FC6D26" },
];

const categories = ["Tous", "Frontend", "Backend", "Databases", "DevOps", "QA & CI/CD"] as const;
type CategoryFilter = (typeof categories)[number];

const categoryLabels: Record<CategoryFilter, string> = {
  Tous: "Tous",
  Frontend: "Frontend",
  Backend: "Backend",
  Databases: "Bases de données",
  DevOps: "DevOps & Cloud",
  "QA & CI/CD": "QA & CI/CD",
};

/**
 * Matrice de badges de compétences interactifs filtrables par catégorie.
 */
const SkillMatrix = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Tous");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "Tous") return skillsData;
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Filtres par sous-catégorie */}
      <div className="flex flex-wrap items-center justify-center xl:justify-start gap-1.5 sm:gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/10"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Grille de badges */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group flex items-center gap-x-2.5 p-2.5 sm:p-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] transition-transform duration-300 group-hover:scale-110">
                <skill.Icon className="text-lg sm:text-xl" style={{ color: skill.color }} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-semibold leading-tight text-white/90 truncate">
                  {skill.name}
                </span>
                <span className="text-[10px] text-white/40 group-hover:text-accent transition-colors duration-300">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillMatrix;
