"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export interface WorkImage {
  title: string;
  path: string;
  link: string;
  /** Catégorie du projet, ex. "Web", "Mobile", "Fullstack" — doit correspondre aux valeurs de work.categories (hors "Tous"/"All") */
  category: string;
}

interface WorkSliderProps {
  /** Catégorie active sélectionnée dans WorkFilters */
  category?: string;
  /** Libellé correspondant à "toutes les catégories" (ex. work.categories[0], "Tous" ou "All") — si category === allLabel, aucun filtre n'est appliqué */
  allLabel?: string;
}

// Liste plate des projets — remplace path/link/title/category par tes vrais projets
const projects: WorkImage[] = [
  { title: "title", path: "/thumb1.jpg", link: "http://example.com", category: "Web" },
  { title: "title", path: "/thumb2.jpg", link: "http://example.com", category: "Mobile" },
  { title: "title", path: "/thumb3.jpg", link: "http://example.com", category: "Fullstack" },
  { title: "title", path: "/thumb4.png", link: "http://example.com", category: "Web" },
  { title: "title", path: "/thumb4.png", link: "http://example.com", category: "Fullstack" },
  { title: "title", path: "/thumb1.jpg", link: "http://example.com", category: "Mobile" },
  { title: "title", path: "/thumb2.jpg", link: "http://example.com", category: "Web" },
  { title: "title", path: "/thumb3.jpg", link: "http://example.com", category: "Fullstack" },
];

const CHUNK_SIZE = 4;

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const WorkSlider = ({ category, allLabel }: WorkSliderProps) => {
  const filtered = useMemo(() => {
    if (!category || category === allLabel) return projects;
    return projects.filter((p) => p.category === category);
  }, [category, allLabel]);

  const slides = useMemo(() => chunk(filtered, CHUNK_SIZE), [filtered]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category ?? "all"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        {slides.length === 0 ? (
          <div className="h-[280px] sm:h-[480px] flex items-center justify-center text-white/40 text-sm">
            Aucun projet dans cette catégorie pour le moment.
          </div>
        ) : (
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full">
                  {slide.map((image, imageI) => (
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={imageI}
                    >
                      <div className="relative w-full h-full overflow-hidden group">
                        <Image
                          src={image.path}
                          alt={image.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 30vw, 25vw"
                        />

                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                          aria-hidden
                        />

                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <Link
                            href={image.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] px-2"
                          >
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              <BsArrowRight aria-hidden />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkSlider;