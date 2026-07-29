import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import CountUp from "react-countup";
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

import AboutInfoList from "../../components/AboutInfoList";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import IconCloud, { type CloudIcon } from "../../components/IconCloud";
import { useLanguage } from "../../context/LanguageContext";
import { fadeIn } from "../../variants";

interface AboutInfoItem {
  title: string;
  stage?: string;
}

// Calcule le nombre d'années écoulées depuis une année de départ jusqu'à aujourd'hui
const getYearsSince = (startYear: number): number => {
  const start = new Date(startYear, 0, 1);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();

  const hasHadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!hasHadAnniversaryThisYear) {
    years -= 1;
  }

  return years;
};

const counterItems = [
  { end: 0, key: "experience" as const, dynamic: true },
  { end: 5, key: "companies" as const, dynamic: false },
  { end: 20, key: "projects" as const, dynamic: false },
  { end: 25, key: "technologies" as const, dynamic: false },
];

// Liste plate de toutes les technologies affichées dans le globe 3D
const skillIcons: CloudIcon[] = [
  { Icon: FaReact, label: "React", color: "#61DAFB" },
  { Icon: SiVuedotjs, label: "Vue.js", color: "#4FC08D" },
  { Icon: FaAngular, label: "Angular", color: "#DD0031" },
  { Icon: SiIonic, label: "Ionic", color: "#3880FF" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: FaJs, label: "JavaScript", color: "#F7DF1E" },
  { Icon: FaNodeJs, label: "Node.js", color: "#339933" },
  { Icon: FaPhp, label: "PHP", color: "#777BB4" },
  { Icon: SiSymfony, label: "Symfony", color: "#E8E8E8" },
  { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#6E9EFF" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: FaDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiKubernetes, label: "Kubernetes", color: "#326CE5" },
  { Icon: FaAws, label: "AWS", color: "#FF9900" },
  { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { Icon: SiCypress, label: "Cypress", color: "#69D3A0" },
  { Icon: SiJest, label: "Jest", color: "#E5534B" },
  { Icon: SiGithubactions, label: "GitHub Actions", color: "#2088FF" },
  { Icon: SiGitlab, label: "GitLab", color: "#FC6D26" },
  { Icon: FaGitAlt, label: "Git", color: "#F05032" },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const { about } = t;

  const yearsOfExperience = getYearsSince(2020);
  const isSkillsTab = index === 0;

  const listTabs: { title: string; info: AboutInfoItem[] }[] = [
    { title: about.tabs.languages, info: about.languagesInfo },
    { title: about.tabs.experience, info: about.experienceInfo },
    { title: about.tabs.credentials, info: about.credentialsInfo },
  ];

  const tabTitles = [about.tabs.skills, ...listTabs.map((tab) => tab.title)];

  // useMemo pour ne pas recréer le tableau à chaque re-render (IconCloud en dépend)
  const icons = useMemo(() => skillIcons, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {!isSkillsTab && <Circles />}

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {about.headingPre}{" "}
            <span className="text-accent">{about.headingAccent}</span>{" "}
            {about.headingPost}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {about.bio}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {counterItems.map((counter, i) => (
                <div
                  key={counter.key}
                  className={`relative flex-1 group ${i !== counterItems.length - 1
                    ? "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                    : ""
                    }`}
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <CountUp
                      start={0}
                      end={counter.dynamic ? yearsOfExperience : counter.end}
                      duration={5}
                    />
                    <span className="text-accent">+</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {about.counters[counter.key]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[480px]"
        >
          <div
            role="tablist"
            aria-label={about.tabs.skills}
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
          >
            {tabTitles.map((title, itemI) => (
              <button
                key={itemI}
                role="tab"
                aria-selected={index === itemI}
                onClick={() => setIndex(itemI)}
                className={`relative pb-1 cursor-pointer capitalize xl:text-lg outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm ${index === itemI ? "text-accent" : "text-white/80 hover:text-white"
                  }`}
              >
                {title}
                {index === itemI && (
                  <motion.div
                    layoutId="about-tab-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            <AnimatePresence mode="wait">
              {isSkillsTab ? (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full flex justify-center xl:justify-start"
                >
                  <IconCloud icons={icons} maxSize={380} iconSize={32} />
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <AboutInfoList
                    items={listTabs[index - 1].info}
                    variant={index === 1 ? "languages" : index === 2 ? "timeline" : "credentials"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;