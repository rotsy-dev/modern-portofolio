"use client";

import { HiSun, HiMoon } from "react-icons/hi2";

import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
        >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
        </button>
    );
};

export default ThemeToggle;