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
        headingAccent: ["réalité numérique", "apps performantes", "code propre", "impact réel"],
        headingInto: "en",
        paragraph:
            "Je conçois et développe des produits web et mobiles fiables et performants, en alliant code propre et culture QA pour livrer des solutions durables.",
        downloadCV: "Télécharger CV",
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
        infoHeading: "Autres moyens de me joindre",
        info: [
            { icon: "mail", label: "Email", value: "rotsyni@gmail.com", href: "mailto:rotsyni@gmail.com" },
            { icon: "phone", label: "Téléphone", value: "+261 34 80 350 05", href: "tel:+261348035005" },
            { icon: "whatsapp", label: "WhatsApp", value: "+261 34 80 350 05", href: "https://wa.me/261348035005" },
            { icon: "linkedin", label: "LinkedIn", value: "@rotsyraharinosy", href: "https://www.linkedin.com/in/rotsy-maminintsoa-raharinosy/" },
        ],
    },
    services: {
        heading: "Mes services",
        paragraph:
            "De la conception à la mise en production, j'accompagne vos projets web et mobiles avec une approche fullstack, orientée qualité et performance.",
        list: [
            { title: "Développement Fullstack", description: "Applications robustes de bout en bout avec Symfony, Node.js, React et Vue.js." },
            { title: "Tests & Assurance Qualité", description: "Suites de tests E2E fiables avec Cypress et Jest pour sécuriser vos livraisons." },
            { title: "Applications Mobiles", description: "Apps hybrides performantes avec Ionic et Angular, un seul code pour iOS et Android." },
            { title: "DevOps & CI/CD", description: "Pipelines automatisés et infrastructure scalable avec Docker, Kubernetes et AWS." },
            { title: "API & Architecture Backend", description: "Conception d'API REST et GraphQL sécurisées, documentées et évolutives." },
            { title: "Intégration Web", description: "Interfaces fidèles au design, accessibles et responsives avec HTML5, CSS3 et Tailwind." },
        ],
        cta: "Discutons de votre projet",
        stats: [
            { value: 20, suffix: "+", label: "Projets réalisés" },
            { value: 98, suffix: "%", label: "Satisfaction client" },
            { value: 6, suffix: "+", label: "Années d'expertise" },
            { value: 24, suffix: "h", label: "Temps de réponse moyen" },
        ],
        process: [
            { title: "Découverte", description: "On échange sur vos besoins et objectifs" },
            { title: "Conception", description: "Maquettes et architecture technique" },
            { title: "Développement", description: "Code propre, testé, itératif" },
            { title: "Livraison", description: "Déploiement et suivi post-lancement" },
        ],
    },
    work: {
        heading: "Mes projets",
        paragraph: "Quelques projets réalisés en web et mobile fullstack.",
        cta: "Voir tous mes projets sur GitHub",
        categories: ["Tous", "Web", "Mobile", "Fullstack"],
        readMore: "En savoir plus",
        projects: {
            isi: {
                title: "ISI — Gestion de devis & workflow",
                company: "Menuiserie de la Grande Ile",
                description:
                    "Plateforme web de suivi des commandes pour un atelier de menuiserie aluminium, couvrant tout le processus devis → livraison, avec suivi en temps réel de plus de 100 commandes par mois pour +30 utilisateurs actifs.",
                highlights: [
                    "+50% de performance applicative grâce à l'optimisation du code",
                    "Protocoles de sécurité et d'authentification renforcés",
                    "Systèmes de sauvegarde de données automatisés",
                ],
            },
            isiMobile: {
                title: "ISI Mobile — Suivi terrain & validation",
                company: "Menuiserie de la Grande Ile",
                description:
                    "Application mobile complémentaire à la plateforme ISI, permettant aux équipes terrain de consulter les devis, valider les chiffrages et suivre les commandes en déplacement, avec authentification synchronisée sur le système web existant.",
                highlights: [
                    "Authentification par session partagée avec la plateforme web",
                    "Interface adaptative selon les permissions de chaque utilisateur",
                    "Statistiques et suivi en temps réel accessibles en mobilité",
                ],
            },
            qa: {
                title: "Stratégie de tests E2E automatisés",
                company: "SmartPredict",
                description:
                    "Conception et implémentation d'une stratégie complète de tests E2E avec Cypress, couvrant l'ensemble des parcours critiques utilisateurs, intégrée directement dans le pipeline CI/CD.",
                highlights: [
                    "Réduction significative du temps de livraison et des régressions",
                    "Framework de tests scalable et maintenable",
                    "Optimisation des performances via Google Lighthouse",
                ],
            },
            office: {
                title: "Solution de facturation & gestion de stocks",
                company: "MANAO SIDINA",
                description:
                    "Développement d'une solution tableur complète et d'une application de gestion des factures et des stocks pour simplifier les processus financiers et logistiques d'une PME.",
            },
            sales: {
                title: "Automatisation des processus financiers",
                company: "Airtel Madagascar",
                description:
                    "Supervision du cycle complet des factures et développement d'outils internes avec PHP/VBA Excel pour automatiser les processus financiers de l'entreprise.",
            },
            maritime: {
                title: "Gestion des trafics maritimes",
                company: "Agence Portuaire Maritime et Fluviale (APMF)",
                description:
                    "Conception d'une application de gestion des trafics maritimes, optimisant la surveillance et la sécurité des opérations portuaires.",
            },
        },
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