import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

import "../styles/globals.css";

// Masquage et synchronisation d'opacité avec popLayout (transition douce sans chevauchement)
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: "easeIn" },
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