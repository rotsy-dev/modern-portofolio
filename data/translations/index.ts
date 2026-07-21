import en from "./en";
import fr from "./fr";
import type { LanguageCode, Translation } from "../../types/translations";

export const translations: Record<LanguageCode, Translation> = { en, fr };

export const defaultLanguage: LanguageCode = "en";