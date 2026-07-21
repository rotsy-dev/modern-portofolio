"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeMode = "dark" | "light";

interface ThemeContextValue {
    theme: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeMode>("dark");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
        const initial = stored ?? "dark";
        setTheme(initial);
        document.documentElement.classList.toggle("light", initial === "light");
    }, []);

    const toggleTheme = () => {
        const next: ThemeMode = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("light", next === "light");
        window.localStorage.setItem(STORAGE_KEY, next);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};