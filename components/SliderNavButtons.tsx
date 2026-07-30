import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

interface SliderNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

/**
 * Boutons de navigation circulaire (Précédent / Suivant) réutilisables pour les carrousels Swiper.
 */
const SliderNavButtons = ({ onPrev, onNext, className = "" }: SliderNavButtonsProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-accent/60 hover:text-accent"
      >
        <RxChevronLeft className="text-base" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-accent/60 hover:text-accent"
      >
        <RxChevronRight className="text-base" />
      </button>
    </div>
  );
};

export default SliderNavButtons;
