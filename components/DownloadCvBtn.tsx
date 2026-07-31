
import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

interface DownloadCvBtnProps {
  className?: string;
}

/**
 * Bouton "Download CV" réutilisable avec style Glassmorphism & Neon Glow.
 */
const DownloadCvBtn = ({ className = "" }: DownloadCvBtnProps) => {
  const { t } = useLanguage();

  return (
    <motion.a
      href="/cv.pdf"
      download="Rotsy-Raharinosy-CV.pdf"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative inline-flex items-center justify-center gap-x-2.5 rounded-full border border-accent/40 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-500 hover:border-accent hover:bg-gradient-to-r hover:from-accent hover:to-red-600 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(241,48,36,0.6)] sm:px-7 sm:py-3.5 sm:text-base ${className}`}
    >
      <HiArrowDownTray
        className="text-lg text-accent transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-white"
        aria-hidden
      />
      <span>{t.home.downloadCV ?? "Télécharger CV"}</span>
    </motion.a>
  );
};

export default DownloadCvBtn;
