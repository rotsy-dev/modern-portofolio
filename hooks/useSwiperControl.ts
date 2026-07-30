"use client";

import { useCallback, useRef, type MutableRefObject } from "react";
import type { Swiper as SwiperType } from "swiper";

export interface UseSwiperControlReturn {
  swiperRef: MutableRefObject<SwiperType | null>;
  setSwiper: (swiper: SwiperType) => void;
  slidePrev: () => void;
  slideNext: () => void;
}

/**
 * Hook personnalisé réutilisable pour gérer la référence Swiper et la navigation (Précédent / Suivant).
 */
export const useSwiperControl = (): UseSwiperControlReturn => {
  const swiperRef = useRef<SwiperType | null>(null);

  const setSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const slidePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const slideNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return { swiperRef, setSwiper, slidePrev, slideNext };
};
