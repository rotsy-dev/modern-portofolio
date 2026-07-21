import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
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

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useLanguage } from "../../context/LanguageContext";
import { fadeIn } from "../../variants";

interface AboutInfoItem {
  title: string;
  stage?: string;
  icons?: IconType[];
}

interface SkillIconGroup {
  key: "frontend" | "backend" | "database" | "testing";
  icons: IconType[];
}

const skillIcons: SkillIconGroup[] = [
  { key: "frontend", icons: [FaReact, SiVuedotjs, FaAngular, SiIonic, SiTypescript, FaJs] },
  { key: "backend", icons: [FaNodeJs, FaPhp, SiSymfony, SiGraphql] },
  {
    key: "database",
    icons: [SiMysql, SiPostgresql, SiMongodb, FaDocker, SiKubernetes, FaAws, SiFirebase],
  },
  { key: "testing", icons: [SiCypress, SiJest, SiGithubactions, SiGitlab, FaGitAlt] },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const { about } = t;

  const aboutData: { title: string; info: AboutInfoItem[] }[] = [
    {
      title: about.tabs.skills,
      info: skillIcons.map((group) => ({
        title: about.skillGroups[group.key],
        icons: group.icons,
      })),
    },
    {
      title: about.tabs.languages,
      info: about.languagesInfo,
    },
    {
      title: about.tabs.experience,
      info: about.experienceInfo,
    },
    {
      title: about.tabs.credentials,
      info: about.credentialsInfo,
    },
  ];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

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
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {about.counters.experience}
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {about.counters.companies}
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {about.counters.projects}
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {about.counters.technologies}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;