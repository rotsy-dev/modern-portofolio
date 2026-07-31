
import { motion } from "framer-motion";

interface WorkFiltersProps {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
}

const WorkFilters = ({ categories, active, onChange }: WorkFiltersProps) => {
    return (
        <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/10 pb-3 text-sm uppercase tracking-widest"
        >
            {categories.map((category) => {
                const isActive = category === active;
                return (
                    <motion.button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className={`relative pb-2 transition-colors duration-300 focus-visible:outline-none ${isActive ? "text-white" : "text-white/40 hover:text-white/70"
                            }`}
                    >
                        {category}
                        {isActive && (
                            <motion.span
                                layoutId="work-filter-underline"
                                className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-accent"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                    </motion.button>
                );
            })}
        </div>
    );
};

export default WorkFilters;