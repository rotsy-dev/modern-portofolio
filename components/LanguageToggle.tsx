"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-x-1 text-sm font-semibold">
            <button
                type="button"
                onClick={() => setLanguage("fr")}
                aria-pressed={language === "fr"}
                className={`px-2 py-1 rounded-full transition-all duration-300 ${language === "fr"
                        ? "bg-accent text-white"
                        : "text-white/60 hover:text-white"
                    }`}
            >
                FR
            </button>
            <span className="text-white/30">/</span>
            <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`px-2 py-1 rounded-full transition-all duration-300 ${language === "en"
                        ? "bg-accent text-white"
                        : "text-white/60 hover:text-white"
                    }`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageToggle;