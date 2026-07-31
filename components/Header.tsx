import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Socials from "./Socials";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { fadeDown, staggerContainer, staggerItem, SPRING } from "../lib/motion";

const Header = () => {
  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="show"
      className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <motion.div whileHover={{ scale: 1.04 }} transition={SPRING}>
            <Link href="/" aria-label="Accueil">
              <Image
                src="/logo.svg"
                alt="logo"
                width={220}
                height={48}
                priority
              />
            </Link>
          </motion.div>

          {/* right side: theme + language toggle + socials */}
          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-x-4"
          >
            <motion.div variants={staggerItem}>
              <ThemeToggle />
            </motion.div>
            <motion.div variants={staggerItem}>
              <LanguageToggle />
            </motion.div>
            <motion.div variants={staggerItem}>
              <Socials />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;