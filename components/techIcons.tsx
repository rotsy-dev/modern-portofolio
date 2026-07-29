import { techIconMap } from "@/data/TechIcon";


interface TechIconProps {
    tech: string;
}

const TechIcon = ({ tech }: TechIconProps) => {
    const Icon = techIconMap[tech];

    return (
        <div
            title={tech}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white/80"
        >
            {Icon ? <Icon className="text-sm" aria-hidden /> : (
                <span className="text-[10px] font-semibold">{tech.charAt(0)}</span>
            )}
        </div>
    );
};

export default TechIcon;