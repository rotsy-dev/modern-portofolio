import { motion } from "framer-motion";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useLanguage } from "../context/LanguageContext";

const avatarImages: string[] = ["/t-avt-1.png", "/t-avt-2.png", "/t-avt-3.png"];

/**
 * Slider de témoignages.
 * Transitions gérées par Swiper CSS natif (évite les conflits AnimatePresence/Swiper).
 * Animations Framer Motion uniquement sur les éléments statiques (icône de citation).
 */
const TestimonialSlider = () => {
  const { t } = useLanguage();
  const testimonialData = t.testimonials.list.map((item, i) => ({
    ...item,
    image: avatarImages[i],
  }));

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* Avatar + identité */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <motion.div
                  className="mb-2 mx-auto"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full border-2 border-accent/30 hover:border-accent transition-colors duration-300"
                  />
                </motion.div>

                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* Citation */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
              >
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white mx-auto md:mx-0"
                  aria-hidden
                />
              </motion.div>

              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;