import type { Variants, Transition } from "framer-motion";

// ─── Easings ─────────────────────────────────────────────────────────────────

/** Exponentiel dramatique — réservé aux panneaux de transition de page */
export const EASE_EXPO = [0.76, 0, 0.24, 1] as const;

/** Cubique doux — entrées d'éléments, la majorité des animations */
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

// ─── Durées ───────────────────────────────────────────────────────────────────

/** Transition de page (panneau coulissant) */
export const DUR_PAGE = 0.45;

/** Entrée d'un élément dans le viewport */
export const DUR_ENTER = 0.5;

/** Micro-interaction (hover, tap, focus) */
export const DUR_MICRO = 0.18;

// ─── Transitions réutilisables ────────────────────────────────────────────────

/** Spring vif pour hover / tap — toujours GPU-only (transform) */
export const SPRING: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 22,
};

/** Spring doux pour les indicateurs de navigation (layoutId) */
export const SPRING_NAV: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

// ─── Variants de base ─────────────────────────────────────────────────────────

const OFFSET = 32; // déplacement de base en px (GPU-friendly)

/** Fade + remontée depuis le bas */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: DUR_ENTER, ease: EASE_SMOOTH },
  },
};

/** Fade + descente depuis le haut */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -OFFSET },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: DUR_ENTER, ease: EASE_SMOOTH },
  },
};

/** Fade + glissement depuis la gauche */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: OFFSET },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: DUR_ENTER, ease: EASE_SMOOTH },
  },
};

/** Fade + glissement depuis la droite */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -OFFSET },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: DUR_ENTER, ease: EASE_SMOOTH },
  },
};

/** Apparition avec scale léger */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: DUR_ENTER, ease: EASE_SMOOTH },
  },
};

// ─── Variants de stagger (conteneurs) ────────────────────────────────────────

/** Conteneur qui applique un stagger à ses enfants */
export const staggerContainer = (delay = 0.08): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});

/** Item générique pour un conteneur stagger (fade + translateY) */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: EASE_SMOOTH },
  },
};
