import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  RxDesktop,
  RxReader,
  RxRocket,
  RxCrop,
  RxPencil2,
  RxLayers,
  RxArrowTopRight,
} from "react-icons/rx";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { useLanguage } from "../context/LanguageContext";
import { SPRING } from "../lib/motion";

const serviceIcons: IconType[] = [RxDesktop, RxReader, RxCrop, RxRocket, RxPencil2, RxLayers];

const ServiceSlider = () => {
  const { t } = useLanguage();
  const serviceData = t.services.list.map((item, i) => ({
    ...item,
    Icon: serviceIcons[i],
  }));

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1280: { slidesPerView: 3, spaceBetween: 24 },
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      modules={[Pagination, Autoplay]}
      loop
      className="h-[280px] sm:h-[320px] xl:h-[300px] pb-10"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6 }}
            className="bg-[rgba(65,47,123,0.15)] h-full rounded-2xl px-6 py-8 flex flex-col gap-4 group cursor-pointer border border-transparent hover:border-accent/30 hover:bg-[rgba(89,65,169,0.2)] hover:shadow-lg hover:shadow-accent/10 transition-colors duration-300"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center justify-between">
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300"
                whileHover={{ rotate: 12 }}
                transition={SPRING}
              >
                <item.Icon aria-hidden />
              </motion.div>
              <motion.div
                className="text-2xl text-white/40 group-hover:text-accent transition-colors duration-300"
                whileHover={{ x: 3, y: -3 }}
                transition={SPRING}
              >
                <RxArrowTopRight aria-hidden />
              </motion.div>
            </div>

            <div>
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="text-sm leading-relaxed text-white/70 line-clamp-4">
                {item.description}
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;