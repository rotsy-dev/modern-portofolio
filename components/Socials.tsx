import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

import { SPRING, staggerContainer, staggerItem } from "../lib/motion";

export interface SocialLink {
  name: string;
  link: string;
  Icon: IconType;
}

export const socialData: SocialLink[] = [
  { name: "YouTube", link: "https://youtube.com", Icon: RiYoutubeLine },
  { name: "Instagram", link: "https://instagram.com", Icon: RiInstagramLine },
  { name: "Facebook", link: "https://facebook.com", Icon: RiFacebookLine },
  { name: "Dribbble", link: "https://dribbble.com", Icon: RiDribbbleLine },
  { name: "Pinterest", link: "https://pinterest.com", Icon: RiPinterestLine },
  { name: "Github", link: "https://github.com/rotsy-dev/rotsy-dev", Icon: RiGithubLine },
];

const Socials = () => {
  return (
    <motion.div
      variants={staggerContainer(0.05)}
      initial="hidden"
      animate="show"
      className="flex items-center gap-x-5 text-lg"
    >
      {socialData.map((social, i) => (
        <motion.div key={i} variants={staggerItem}>
          <motion.div whileHover={{ y: -3, scale: 1.15 }} transition={SPRING}>
            <Link
              title={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`${
                social.name === "Github"
                  ? "bg-accent rounded-full p-[5px] hover:text-white"
                  : "hover:text-accent"
              } transition-colors duration-200 block`}
            >
              <social.Icon aria-hidden />
              <span className="sr-only">{social.name}</span>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Socials;