import { RxArrowTopRight } from "react-icons/rx";

interface SliderActionArrowProps {
  className?: string;
}

/**
 * Composant d'icône d'action au survol (RxArrowTopRight) réutilisable dans les cartes des sliders.
 */
const SliderActionArrow = ({ className = "text-2xl text-white/40" }: SliderActionArrowProps) => {
  return (
    <RxArrowTopRight
      className={`transition-all duration-300 group-hover:rotate-45 group-hover:text-accent ${className}`}
      aria-hidden
    />
  );
};

export default SliderActionArrow;
