import { useEffect, useState } from "react";

interface UseTypewriterOptions {
    words: string[];
    typingSpeed?: number; // ms per character while typing
    deletingSpeed?: number; // ms per character while deleting
    pauseTime?: number; // ms to wait once a word is fully typed
}

/**
 * Cycles through a list of words with a typewriter effect:
 * types the word, pauses, deletes it, then moves to the next word.
 */
export const useTypewriter = ({
    words,
    typingSpeed = 90,
    deletingSpeed = 50,
    pauseTime = 1800,
}: UseTypewriterOptions): string => {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    const wordsKey = words.join(",");

    // Réinitialise l'état de la machine à écrire si le contenu des mots change (ex: changement de langue FR -> EN)
    useEffect(() => {
        setWordIndex(0);
        setCharIndex(0);
        setIsDeleting(false);
        setDisplayedText("");
    }, [wordsKey]);

    useEffect(() => {
        if (words.length === 0) return;

        const safeWordIndex = wordIndex % words.length;
        const currentWord = words[safeWordIndex] ?? "";

        // Sécurité si charIndex dépasse la longueur du nouveau mot
        if (charIndex > currentWord.length) {
            setCharIndex(currentWord.length);
            setDisplayedText(currentWord);
            return;
        }

        // Word fully typed: pause, then start deleting
        if (!isDeleting && charIndex === currentWord.length) {
            const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(pauseTimeout);
        }

        // Word fully deleted: move to next word
        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                const nextCharIndex = charIndex + (isDeleting ? -1 : 1);
                setCharIndex(nextCharIndex);
                setDisplayedText(currentWord.slice(0, nextCharIndex));
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, wordsKey, typingSpeed, deletingSpeed, pauseTime]);

    return displayedText;
};