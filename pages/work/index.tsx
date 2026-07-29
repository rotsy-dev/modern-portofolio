import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import TechMarquee from "../../components/TechMarquee";
import WorkFilters from "../../components/WorkFilters";
import WorkSlider from "../../components/WorkSlider";
import { useLanguage } from "../../context/LanguageContext";
import { fadeIn } from "../../variants";

// Remplace par ton profil GitHub réel
const GITHUB_URL = "https://github.com/your-username";

const Work = () => {
  const { t } = useLanguage();
  const { work } = t;
  const [activeCategory, setActiveCategory] = useState(work.categories[0]);

  return (
    <div className="relative h-full bg-primary/30 py-36 flex items-center overflow-hidden">
      {/* halo décoratif animé en fond */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Circles />
      <div className="container mx-auto relative">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              {work.heading}
              {"\u00A0"}
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              {work.paragraph}
            </motion.p>

            {/* CTA GitHub */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-2 flex justify-center lg:justify-start"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-x-2 rounded-full border border-accent/50 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-[0_0_24px_-4px] hover:shadow-accent"
              >
                <FaGithub className="text-base" />
                {work.cta}
              </a>
            </motion.div>
          </div>

          {/* filtres + slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkFilters
              categories={work.categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <WorkSlider
              category={activeCategory}
              allLabel={work.categories[0]}
            />
          </motion.div>
        </div>

        {/* bandeau technologies */}
        <TechMarquee />
      </div>
      <Bulb />
    </div>
  );
};

export default Work;