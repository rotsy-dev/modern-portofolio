import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { useLanguage } from "../context/LanguageContext";
import { SPRING, SPRING_NAV } from "../lib/motion";

interface NavItem {
  key: "home" | "about" | "services" | "work" | "testimonials" | "contact";
  path: string;
  Icon: IconType;
}

const navItems: NavItem[] = [
  { key: "home", path: "/", Icon: HiHome },
  { key: "about", path: "/about", Icon: HiUser },
  { key: "services", path: "/services", Icon: HiRectangleGroup },
  { key: "work", path: "/work", Icon: HiViewColumns },
  { key: "testimonials", path: "/testimonials", Icon: HiChatBubbleBottomCenterText },
  { key: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { t } = useLanguage();

  const navData = navItems.map((item) => ({
    ...item,
    name: t.nav[item.key],
  }));

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-foreground/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => {
          const isActive = link.path === pathname;
          return (
            <Link
              className="relative flex items-center group"
              href={link.path}
              key={i}
              aria-label={link.name}
            >
              {/* Indicateur actif — layoutId crée le glissement fluide entre items */}
              {isActive && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute inset-0 -m-2 xl:-m-2.5 rounded-full bg-accent/15"
                  transition={SPRING_NAV}
                  aria-hidden
                />
              )}

              {/* Tooltip label au hover (desktop) */}
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex"
              >
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>

              {/* Icône */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={SPRING}
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-white/60 group-hover:text-accent"
                }`}
              >
                <link.Icon aria-hidden />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;