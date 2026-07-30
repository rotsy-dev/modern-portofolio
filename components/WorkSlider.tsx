"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { projectsMeta } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { useSwiperControl } from "../hooks/useSwiperControl";
import { chunk } from "../utils/array";
import ProjectLogo from "./ProjectLogo";
import SliderActionArrow from "./SliderActionArrow";
import SliderNavButtons from "./SliderNavButtons";
import WorkModal from "./WorkModal";
import type { ProjectMeta } from "../data/projects";
import type { ProjectTranslation } from "../types/translations";
import TechIcon from "./techIcons";

export type WorkProject = ProjectMeta & ProjectTranslation;

interface WorkSliderProps {
  category?: string;
  allLabel?: string;
}

const CHUNK_SIZE = 4;

const WorkSlider = ({ category, allLabel }: WorkSliderProps) => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const { setSwiper, slidePrev, slideNext } = useSwiperControl();

  const projects: WorkProject[] = useMemo(
    () =>
      projectsMeta.map((meta) => ({
        ...meta,
        ...t.work.projects[meta.id],
      })),
    [t]
  );

  const filtered = useMemo(() => {
    if (!category || category === allLabel) return projects;
    return projects.filter((p) => p.category === category);
  }, [category, allLabel, projects]);

  const slides = useMemo(() => chunk(filtered, CHUNK_SIZE), [filtered]);

  return (
    <>
      {/* meta + navigation */}
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-white/35">
        <span>
          {filtered.length} {filtered.length > 1 ? "projects" : "project"}
        </span>
        {slides.length > 1 && <SliderNavButtons onPrev={slidePrev} onNext={slideNext} />}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category ?? "all"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {slides.length === 0 ? (
            <div className="flex h-[320px] items-center justify-center text-center text-sm text-white/40">
              No projects match this filter yet.
            </div>
          ) : (
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={16}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              autoHeight
              className="work-swiper pb-10"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {slide.map((project) => (
                      <motion.button
                        type="button"
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ y: -6 }}
                        whileTap={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/30"
                      >
                        {/* lueur discrète au survol */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20" />

                        <div className="relative flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3.5">
                            <ProjectLogo
                              meta={project}
                              className="h-12 w-12 shadow-lg shadow-black/20"
                              iconClassName="text-xl"
                            />
                            <div>
                              <h4 className="text-sm font-semibold leading-snug text-white sm:text-base">
                                {project.title}
                              </h4>
                              <p className="mt-0.5 text-xs text-white/40">{project.company}</p>
                            </div>
                          </div>
                          <SliderActionArrow className="mt-1 shrink-0 text-lg text-white/25" />
                        </div>

                        <p className="relative text-[13px] leading-relaxed text-white/60 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="relative mt-auto flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <TechIcon key={tech} tech={tech} />
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="text-[10px] font-medium text-white/40">
                              +{project.technologies.length - 6}
                            </span>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </AnimatePresence>

      <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default WorkSlider;