export interface ProjectMeta {
    id: string;
    category: "Web" | "Mobile" | "Fullstack";
    technologies: string[];
    icon: "isi" | "isiMobile" | "qa" | "office" | "sales" | "maritime";
    gradient: [string, string];
}

export const projectsMeta: ProjectMeta[] = [
    {
        id: "isi",
        category: "Fullstack",
        technologies: ["Symfony", "Ionic", "Angular CLI", "Node.js", "TypeScript", "Docker"],
        icon: "isi",
        gradient: ["#4a22bd", "#e838cc"],
    },
    {
        id: "isiMobile",
        category: "Mobile",
        technologies: ["Flutter", "Dart", "Symfony (API)", "Dio", "REST"],
        icon: "isiMobile",
        gradient: ["#5b21b6", "#a855f7"],
    },
    {
        id: "qa",
        category: "Web",
        technologies: ["Cypress", "Jest", "TypeScript", "GraphQL", "Node.js", "GitHub Actions"],
        icon: "qa",
        gradient: ["#0f766e", "#22d3ee"],
    },
    {
        id: "office",
        category: "Web",
        technologies: ["PHP CodeIgniter", "Vue.js", "jQuery", "MySQL", "Git"],
        icon: "office",
        gradient: ["#b45309", "#fbbf24"],
    },
    {
        id: "sales",
        category: "Web",
        technologies: ["PHP CodeIgniter", "jQuery", "MySQL", "VBA Excel"],
        icon: "sales",
        gradient: ["#be123c", "#fb7185"],
    },
    {
        id: "maritime",
        category: "Fullstack",
        technologies: ["Java", "AngularJS", "Spring MVC", "Hibernate", "Bootstrap"],
        icon: "maritime",
        gradient: ["#1e3a8a", "#3b82f6"],
    },
];