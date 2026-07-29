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

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[wordIndex % words.length];

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
                setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
                setDisplayedText(currentWord.slice(0, charIndex + (isDeleting ? -1 : 1)));
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return displayedText;
};