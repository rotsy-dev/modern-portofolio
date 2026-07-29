import type { Translation } from "../../types/translations";

const en: Translation = {
    nav: {
        home: "home",
        about: "about",
        services: "services",
        work: "work",
        testimonials: "testimonials",
        contact: "contact",
    },
    about: {
        headingPre: "Robust lines of code",
        headingAccent: "build",
        headingPost: "solutions that last.",
        bio: "Experienced Fullstack Developer, passionate about building innovative solutions and backed by a solid engineering background. Since starting out in 2018, I've worked on web platforms, mobile apps, and full QA strategies, collaborating with agile teams to deliver reliable, high-performing products.",
        counters: {
            experience: "Years of experience.",
            companies: "Companies worked with.",
            projects: "Projects completed.",
            technologies: "Technologies mastered.",
        },
        tabs: {
            skills: "skills",
            languages: "languages",
            experience: "experience",
            credentials: "credentials",
        },
        skillGroups: {
            frontend: "Frontend",
            backend: "Backend",
            database: "Database & DevOps",
            testing: "Tests & CI/CD",
        },
        languagesInfo: [
            { title: "French", stage: "Advanced" },
            { title: "English", stage: "Basic" },
        ],
        experienceInfo: [
            { title: "Fullstack Developer - Menuiserie de la Grande Ile", stage: "Since Nov. 2023" },
            { title: "QA Automation Engineer - SmartPredict", stage: "Oct. 2022 - Nov. 2023" },
            { title: "Fullstack Developer - MANAO SIDINA", stage: "May 2022 - Aug. 2022" },
            { title: "Sales Administrator - Airtel Madagascar", stage: "Mar. 2021 - Nov. 2021" },
            { title: "Developer Intern - APMF", stage: "Apr. 2018 - Oct. 2018" },
        ],
        credentialsInfo: [
            { title: "Master's in Computer Science - ENI Fianarantsoa", stage: "2019 - 2020" },
            { title: "Bachelor's in Computer Science - ENI Fianarantsoa", stage: "2016 - 2017" },
        ],
    },
    home: {
        headingPre: "Transforming Ideas",
        headingAccent: ["Digital Reality", "Scalable Apps", "Clean Code", "Real Impact"],
        headingInto: "Into",
        paragraph:
            "I design and build reliable, high-performing web and mobile products, combining clean code with a strong QA mindset to deliver solutions that last.",
        downloadCV: "Download CV",
    },
    contact: {
        heading: "Let's",
        headingAccent: "connect.",
        namePlaceholder: "Name",
        emailPlaceholder: "E-mail",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message...",
        submitBtn: "Let's talk",
        successMessage: "Thank you. I will get back to you ASAP.",
    },
    services: {
        heading: "My services",
        paragraph:
            "From design to production, I support your web and mobile projects with a fullstack approach focused on quality and performance.",
        list: [
            { title: "Fullstack Development", description: "Robust end-to-end applications with Symfony, Node.js, React and Vue.js." },
            { title: "QA & Testing", description: "Reliable E2E test suites with Cypress and Jest to secure every release." },
            { title: "Mobile Apps", description: "High-performance hybrid apps with Ionic and Angular, one codebase for iOS and Android." },
            { title: "DevOps & CI/CD", description: "Automated pipelines and scalable infrastructure with Docker, Kubernetes and AWS." },
            { title: "API & Backend Architecture", description: "Secure, documented and scalable REST and GraphQL API design." },
            { title: "Web Integration", description: "Pixel-perfect, accessible and responsive interfaces with HTML5, CSS3 and Tailwind." },
        ],
        cta: "Let's discuss your project",
        stats: [
            { value: 20, suffix: "+", label: "Projects completed" },
            { value: 98, suffix: "%", label: "Client satisfaction" },
            { value: 6, suffix: "+", label: "Years of expertise" },
            { value: 24, suffix: "h", label: "Average response time" },
        ],
        process: [
            { title: "Discovery", description: "We discuss your needs and goals" },
            { title: "Design", description: "Mockups and technical architecture" },
            { title: "Development", description: "Clean, tested, iterative code" },
            { title: "Delivery", description: "Deployment and post-launch support" },
        ],
    },
    work: {
        heading: "My work",
        paragraph: "A few fullstack web and mobile projects.",
        cta: "See all my projects on GitHub",
        categories: ["All", "Web", "Mobile", "Fullstack"],
    },
    testimonials: {
        heading: "What clients say.",
        list: [
            { name: "Hery R.", position: "Project Manager", message: "Rotsy delivered our platform on time, with clean, well-tested code." },
            { name: "Nomena A.", position: "Product Owner", message: "Thanks to his automated tests, we cut down bugs in production. Thorough and responsive." },
            { name: "Vincent M.", position: "CTO", message: "Truly versatile across front, back and QA. Rotsy adapts fast and always brings practical solutions." },
        ],
    },
};

export default en;