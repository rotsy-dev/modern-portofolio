import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { EASE_SMOOTH } from "../lib/motion";

import "../styles/globals.css";

// Léger pop d'entrée (scale 0.98→1) en plus du fade — sensation "premium"
const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: 0.15, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: { duration: 0.15, ease: EASE_SMOOTH },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={router.asPath}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              <Transition />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;