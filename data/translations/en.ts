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
        infoHeading: "Other ways to reach me",
        info: [
            { icon: "mail", label: "Email", value: "rotsyni@gmail.com", href: "mailto:rotsyni@gmail.com" },
            { icon: "phone", label: "Phone", value: "+261 34 80 350 05", href: "tel:+261348035005" },
            { icon: "whatsapp", label: "WhatsApp", value: "+261 34 80 350 05", href: "https://wa.me/261348035005" },
            { icon: "linkedin", label: "LinkedIn", value: "@rotsyraharinosy", href: "https://www.linkedin.com/in/rotsy-maminintsoa-raharinosy/" },
        ],
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
        readMore: "Read more",
        projects: {
            isi: {
                title: "ISI — Quotation & Workflow Management",
                company: "Menuiserie de la Grande Ile",
                description:
                    "Web platform for order tracking at an aluminum joinery workshop, covering the entire quotation-to-delivery process, with real-time tracking of over 100 orders per month for +30 active users.",
                highlights: [
                    "+50% application performance through code optimization",
                    "Strengthened security and authentication protocols",
                    "Automated data backup systems",
                ],
            },
            isiMobile: {
                title: "ISI Mobile — Field Tracking & Validation",
                company: "Menuiserie de la Grande Ile",
                description:
                    "Mobile companion app to the ISI platform, letting field teams review quotes, validate pricing, and track orders on the go, with authentication synced to the existing web system.",
                highlights: [
                    "Shared session authentication with the web platform",
                    "Adaptive interface based on each user's permissions",
                    "Real-time stats and tracking accessible on the move",
                ],
            },
            qa: {
                title: "Automated E2E Testing Strategy",
                company: "SmartPredict",
                description:
                    "Design and implementation of a complete E2E testing strategy with Cypress, covering all critical user journeys, integrated directly into the CI/CD pipeline.",
                highlights: [
                    "Significant reduction in delivery time and production regressions",
                    "Scalable, maintainable automated testing framework",
                    "Performance optimization via Google Lighthouse",
                ],
            },
            office: {
                title: "Invoicing & Inventory Management Solution",
                company: "MANAO SIDINA",
                description:
                    "Development of a complete spreadsheet solution and an invoicing and inventory management app to streamline a company's financial and logistics processes.",
            },
            sales: {
                title: "Financial Process Automation",
                company: "Airtel Madagascar",
                description:
                    "Oversaw the full invoicing cycle and built internal tools with PHP/VBA Excel to automate the company's financial processes.",
            },
            maritime: {
                title: "Maritime Traffic Management",
                company: "Agence Portuaire Maritime et Fluviale (APMF)",
                description:
                    "Design of a maritime traffic management application, improving surveillance and safety of port operations.",
            },
        },
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