import type { Translation } from "../../types/translations";

const fr: Translation = {
    nav: {
        home: "accueil",
        about: "à propos",
        services: "services",
        work: "projets",
        testimonials: "témoignages",
        contact: "contact",
    },
    about: {
        headingPre: "Des lignes de code",
        headingAccent: "robustes",
        headingPost: "forgent des solutions durables.",
        bio: "Développeur Fullstack expérimenté, passionné par la création de solutions innovantes et doté d'une solide formation en ingénierie. Depuis mes débuts en 2018, j'ai travaillé sur des plateformes web, des applications mobiles et des stratégies QA complètes, en collaborant avec des équipes agiles pour livrer des produits fiables et performants.",
        counters: {
            experience: "Années d'expérience.",
            companies: "Entreprises collaborées.",
            projects: "Projets réalisés.",
            technologies: "Technologies maîtrisées.",
        },
        tabs: {
            skills: "compétences",
            languages: "langues",
            experience: "expérience",
            credentials: "diplômes",
        },
        skillGroups: {
            frontend: "Frontend",
            backend: "Backend",
            database: "Base de données & DevOps",
            testing: "Tests & CI/CD",
        },
        languagesInfo: [
            { title: "Français", stage: "Avancé" },
            { title: "Anglais", stage: "Notion de base" },
        ],
        experienceInfo: [
            { title: "Fullstack Developer - Menuiserie de la Grande Ile", stage: "Depuis nov. 2023" },
            { title: "QA Automation Engineer - SmartPredict", stage: "Oct. 2022 - Nov. 2023" },
            { title: "Développeur fullstack - MANAO SIDINA", stage: "Mai 2022 - Août 2022" },
            { title: "Administrateur de vente - Airtel Madagascar", stage: "Mars 2021 - Nov. 2021" },
            { title: "Stagiaire Développeur - APMF", stage: "Avr. 2018 - Oct. 2018" },
        ],
        credentialsInfo: [
            { title: "Master en Informatique - ENI Fianarantsoa", stage: "2019 - 2020" },
            { title: "Licence en Informatique - ENI Fianarantsoa", stage: "2016 - 2017" },
        ],
    },
    home: {
        headingPre: "Transformer des idées",
        headingAccent: "en réalité numérique",
        paragraph:
            "Je conçois et développe des produits web et mobiles fiables et performants, en alliant code propre et culture QA pour livrer des solutions durables.",
    },
    contact: {
        heading: "Discutons",
        headingAccent: "ensemble.",
        namePlaceholder: "Nom",
        emailPlaceholder: "E-mail",
        subjectPlaceholder: "Sujet",
        messagePlaceholder: "Message...",
        submitBtn: "Discutons",
        successMessage: "Merci. Je vous répondrai dès que possible.",
    },
    services: {
        heading: "Mes services",
        paragraph:
            "De la conception à la mise en production, j'accompagne vos projets web et mobiles avec une approche fullstack, orientée qualité et performance.",
        list: [
            { title: "Développement Fullstack", description: "Symfony, Node.js, React, Vue.js." },
            { title: "Tests & Assurance Qualité", description: "Tests E2E avec Cypress et Jest." },
            { title: "Applications Mobiles", description: "Apps hybrides avec Ionic et Angular." },
            { title: "DevOps & CI/CD", description: "Docker, Kubernetes, AWS." },
            { title: "API & Architecture Backend", description: "API REST et GraphQL." },
        ],
    },
    work: {
        heading: "Mes projets",
        paragraph: "Quelques projets réalisés en web et mobile fullstack.",
    },
    testimonials: {
        heading: "Ce qu'ils disent.",
        list: [
            { name: "Hery R.", position: "Chef de projet", message: "Rotsy a livré notre plateforme dans les délais, avec un code propre et bien testé." },
            { name: "Nomena A.", position: "Product Owner", message: "Grâce à ses tests automatisés, on a réduit nos bugs en production. Rigoureux et réactif." },
            { name: "Vincent M.", position: "CTO", message: "Une vraie polyvalence entre front, back et QA. Rotsy s'intègre vite et propose des solutions concrètes." },
        ],
    },
};

export default fr;