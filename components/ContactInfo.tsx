import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../lib/motion";
import type { IconType } from "react-icons";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

import type { ContactInfoItem } from "../types/translations";

const iconMap: Record<ContactInfoItem["icon"], IconType> = {
  mail: FiMail,
  phone: FiPhone,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
};

interface ContactInfoProps {
  heading: string;
  items: ContactInfoItem[];
}

const ContactInfo = ({ heading, items }: ContactInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-sm uppercase tracking-wider text-white/50"
      >
        {heading}
      </motion.h3>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-3"
      >
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.icon === "whatsapp" || item.icon === "linkedin" ? "_blank" : undefined}
              rel={item.icon === "whatsapp" || item.icon === "linkedin" ? "noopener noreferrer" : undefined}
              variants={staggerItem}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex items-center gap-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-accent/40 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xl text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                <Icon aria-hidden />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-white/50">{item.label}</span>
                <span className="text-sm text-white/90">{item.value}</span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ContactInfo;