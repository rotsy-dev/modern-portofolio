import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { LanguageCode, Translation } from "../types/translations";

const en: Translation = {} as Translation;
const fr: Translation = {} as Translation;
const translations: Record<LanguageCode, Translation> = { en, fr };
const defaultLanguage: LanguageCode = "en";

interface LanguageContextValue {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
        if (stored && translations[stored]) {
            setLanguageState(stored);
        }
    }, []);

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
        window.localStorage.setItem(STORAGE_KEY, lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextValue => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};