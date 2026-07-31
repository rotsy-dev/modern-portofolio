import type { Variants } from "framer-motion";
import { EASE_SMOOTH, DUR_ENTER } from "./lib/motion";

type Direction = "up" | "down" | "left" | "right";

/** Déplacement de base — réduit de 80→32px pour un mouvement plus subtil et premium */
const OFFSET = 32;

/**
 * Variant directionnel avec fade + translate.
 * Durée réduite de 1.4s → 0.5s, easing cubique premium.
 * Utilisé via `initial="hidden" animate="show" exit="hidden"` sur toutes les pages.
 */
export const fadeIn = (direction: Direction, delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? OFFSET : direction === "down" ? -OFFSET : 0,
    x: direction === "left" ? OFFSET : direction === "right" ? -OFFSET : 0,
    transition: {
      type: "tween",
      duration: 0.25,
      delay,
      ease: EASE_SMOOTH,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: DUR_ENTER,
      delay,
      ease: EASE_SMOOTH,
    },
  },
});