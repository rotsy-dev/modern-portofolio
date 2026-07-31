import { motion } from "framer-motion";
import { EASE_EXPO, DUR_PAGE } from "../lib/motion";

const panelVariants = {
  initial: { x: "100%", scaleY: 1 },
  animate: { x: "0%", scaleY: 1 },
  exit: { x: "-100%", scaleY: 0.98 },
};

/**
 * Transition visuelle entre pages.
 * Panneau accent (avant) + panneau dégradé (arrière) — légère compression verticale
 * à la sortie pour une sensation de profondeur "premium".
 */
const Transition = () => {
  return (
    <>
      {/* Panneau accentué — front layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-accent origin-right"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: DUR_PAGE, ease: EASE_EXPO }}
        aria-hidden
      />

      {/* Panneau dégradé — secondary layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-br from-[#4b3792] via-[#3b2d71] to-[#2e2257] origin-right"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: DUR_PAGE, delay: 0.05, ease: EASE_EXPO }}
        aria-hidden
      />
    </>
  );
};

export default Transition;