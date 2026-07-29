import type { IconType } from "react-icons";
import { FiActivity, FiBriefcase, FiCheckCircle, FiTrendingUp, FiAnchor, FiSmartphone } from "react-icons/fi";

import type { ProjectMeta } from "../data/projects";

const iconMap: Record<ProjectMeta["icon"], IconType> = {
    isi: FiActivity,
    isiMobile: FiSmartphone,
    qa: FiCheckCircle,
    office: FiBriefcase,
    sales: FiTrendingUp,
    maritime: FiAnchor,
};

interface ProjectLogoProps {
    meta: Pick<ProjectMeta, "icon" | "gradient">;
    className?: string;
    iconClassName?: string;
}

const ProjectLogo = ({ meta, className = "", iconClassName = "text-xl" }: ProjectLogoProps) => {
    const Icon = iconMap[meta.icon];
    const [from, to] = meta.gradient;

    return (
        <div
            className={`flex shrink-0 items-center justify-center rounded-lg text-white ${className}`}
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
            <Icon className={iconClassName} aria-hidden />
        </div>
    );
};

export default ProjectLogo;