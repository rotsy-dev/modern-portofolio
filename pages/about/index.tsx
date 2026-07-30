import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import AboutInfoList from "../../components/AboutInfoList";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import SkillMatrix from "../../components/SkillMatrix";
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

  return (
    <div className="h-full bg-primary/30 pt-36 pb-12 sm:pt-40 sm:pb-16 xl:py-32 text-center xl:text-left">
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

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 gap-y-8">
        {/* Colonne gauche : Titre, bio et statistiques */}
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
            className="max-w-[520px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-sm sm:text-base leading-relaxed text-white/80"
          >
            {about.bio}
          </motion.p>

          {/* Grille de compteurs : 2x2 sur mobile, flex aligné sur tablette/desktop */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full max-w-md md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6 xl:mb-0"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-1 xl:gap-x-6">
              {counterItems.map((counter, i) => (
                <div
                  key={counter.key}
                  className={`relative flex-1 group p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 md:bg-transparent md:border-none md:p-0 ${
                    i !== counterItems.length - 1
                      ? "md:after:w-[1px] md:after:h-full md:after:bg-white/10 md:after:absolute md:after:top-0 md:after:right-0"
                      : ""
                  }`}
                >
                  <div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-accent mb-1 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <CountUp
                      start={0}
                      end={counter.dynamic ? yearsOfExperience : counter.end}
                      duration={5}
                    />
                    <span className="text-accent">+</span>
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px] mx-auto md:mx-0 text-white/70">
                    {about.counters[counter.key]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Colonne droite : Onglets (Compétences, Langues, Expérience, Diplômes) */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[50%] min-h-[360px] sm:min-h-[400px] xl:min-h-[480px]"
        >
          {/* Liste d'onglets */}
          <div
            role="tablist"
            aria-label={about.tabs.skills}
            className="flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-4 mx-auto xl:mx-0 mb-6"
          >
            {tabTitles.map((title, itemI) => (
              <button
                key={itemI}
                role="tab"
                aria-selected={index === itemI}
                onClick={() => setIndex(itemI)}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm xl:text-base cursor-pointer capitalize outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent/60 ${
                  index === itemI
                    ? "bg-accent/20 text-accent border border-accent/40 font-semibold shadow-sm"
                    : "bg-white/[0.04] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          <div className="py-2 xl:py-4 flex flex-col gap-y-4 items-center xl:items-start overflow-y-auto">
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
                  <SkillMatrix />
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