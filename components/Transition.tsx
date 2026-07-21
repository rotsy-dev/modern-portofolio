import { motion } from "framer-motion";

const Transition = () => {
  const panelVariants = {
    initial: { x: "100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
  };

  const easeExpo = [0.76, 0, 0.24, 1];

  return (
    <>
      {/* accent line leading edge */}
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-accent"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.1, ease: easeExpo }}
        aria-hidden
      />

      {/* main gradient panel */}
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-br from-[#4b3792] via-[#3b2d71] to-[#2e2257]"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.1, delay: 0.15, ease: easeExpo }}
        aria-hidden
      />
    </>
  );
};

export default Transition;