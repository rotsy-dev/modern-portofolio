import { motion } from "framer-motion";
import CountUp from "react-countup";

import { useLanguage } from "../context/LanguageContext";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServiceStats = () => {
    const { t } = useLanguage();
    const { stats } = t.services;

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 gap-y-6 gap-x-4 mt-8 max-w-[360px] mx-auto lg:mx-0"
        >
            {stats.map((stat) => (
                <motion.div
                    key={stat.label}
                    variants={item}
                    whileHover={{ y: -3 }}
                    className="transition-transform"
                >
                    <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                        <CountUp
                            start={0}
                            end={stat.value}
                            duration={2.2}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            enableScrollSpy
                            scrollSpyOnce
                        />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] text-white/50 mt-1">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ServiceStats;