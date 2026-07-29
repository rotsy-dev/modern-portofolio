import { motion } from "framer-motion";

interface WorkFiltersProps {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
}

const WorkFilters = ({ categories, active, onChange }: WorkFiltersProps) => {
    return (
        <div className="mb-6 flex justify-center lg:justify-start">
            <div className="flex gap-x-1.5 overflow-x-auto scrollbar-hide rounded-full border border-white/10 bg-white/5 backdrop-blur-sm p-1.5 max-w-full">
                {categories.map((cat) => {
                    const isActive = active === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => onChange(cat)}
                            className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${isActive ? "text-primary" : "text-white/60 hover:text-white"
                                }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="work-filter-pill"
                                    className="absolute inset-0 -z-10 rounded-full bg-accent shadow-[0_0_20px_-4px] shadow-accent"
                                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                />
                            )}
                            {cat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkFilters;