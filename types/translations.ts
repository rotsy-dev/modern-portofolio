export interface TranslationInfoItem {
    title: string;
    stage: string;
}

export interface ServiceItem {
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
        headingAccent: string;
        paragraph: string;
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
    };
    services: {
        heading: string;
        paragraph: string;
        list: ServiceItem[];
    };
    work: {
        heading: string;
        paragraph: string;
    };
    testimonials: {
        heading: string;
        list: TestimonialItem[];
    };
}

export type LanguageCode = "en" | "fr";