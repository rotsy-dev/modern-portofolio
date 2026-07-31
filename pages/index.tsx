import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import DownloadCvBtn from "../components/DownloadCvBtn";
import Avatar from "../components/Avatar";

import { useLanguage } from "../context/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { fadeIn } from "../variants";

const Home = () => {
  const { t } = useLanguage();
  const typedAccent = useTypewriter({ words: t.home.headingAccent });

  return (
    <div className="bg-primary/60 min-h-full relative flex flex-col justify-center">
      <div className="w-full min-h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex flex-col justify-center">
        <div className="text-center flex flex-col justify-center pt-44 pb-12 xl:pt-40 xl:pb-0 xl:text-left container mx-auto relative z-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {t.home.headingPre} <br /> {t.home.headingInto}{" "}
            <span className="text-accent">
              {typedAccent}
              <span className="border-r-2 border-accent animate-pulse ml-1" aria-hidden />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            {t.home.paragraph}
          </motion.p>

          {/* Boutons mobiles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xl:hidden relative">
            <ProjectsBtn />
            <DownloadCvBtn />
          </div>

          {/* Boutons desktop */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex items-center gap-x-4"
          >
            <ProjectsBtn />
            <DownloadCvBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* Fond explosion */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <div className="pointer-events-auto w-full h-full">
          <ParticlesContainer />
        </div>

        {/* Avatar — whileInView pour mobile où il peut être hors écran */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;