import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
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