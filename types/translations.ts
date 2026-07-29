export interface TranslationInfoItem {
    title: string;
    stage: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface StatItem {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
}

export interface ProcessStepItem {
    title: string;
    description: string;
}

export interface TestimonialItem {
    name: string;
    position: string;
    message: string;
}

export interface Translation {
    nav: {
        home: string;
        about: string;
        services: string;
        work: string;
        testimonials: string;
        contact: string;
    };
    about: {
        headingPre: string;
        headingAccent: string;
        headingPost: string;
        bio: string;
        counters: {
            experience: string;
            companies: string;
            projects: string;
            technologies: string;
        };
        tabs: {
            skills: string;
            languages: string;
            experience: string;
            credentials: string;
        };
        skillGroups: {
            frontend: string;
            backend: string;
            database: string;
            testing: string;
        };
        languagesInfo: TranslationInfoItem[];
        experienceInfo: TranslationInfoItem[];
        credentialsInfo: TranslationInfoItem[];
    };
    home: {
        headingPre: string;
        headingAccent: string[];
        headingInto: string;
        paragraph: string;
        downloadCV: string;

    };
    contact: {
        heading: string;
        headingAccent: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        subjectPlaceholder: string;
        messagePlaceholder: string;
        submitBtn: string;
        successMessage: string;
        infoHeading: string;
        info: ContactInfoItem[];
    };
    services: {
        heading: string;
        paragraph: string;
        list: ServiceItem[];
        cta: string;
        stats: StatItem[];
        process: ProcessStepItem[];
    };
    work: {
        heading: string;
        paragraph: string;
        cta: string;
        categories: string[];
        readMore: string;
        projects: Record<string, ProjectTranslation>;
    };
    testimonials: {
        heading: string;
        list: TestimonialItem[];
    };
}

export interface ContactInfoItem {
    icon: "mail" | "phone" | "whatsapp" | "linkedin";
    label: string;
    value: string;
    href: string;
}

export interface ProjectTranslation {
    title: string;
    company: string;
    description: string;
    highlights?: string[];
}

export type LanguageCode = "en" | "fr";