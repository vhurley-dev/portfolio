export interface Profile {
    name: string;
    jobTitle: string;
    strapLine: string;
    intros: string[];
    experiences: Experience[];
    technologies: Technology[];
    projects: Project[];
    buildInfo: BuildInfo;
}

export interface Experience {
    dateFrom: string;
    dateTo: string;
    company: string;
    companyUrl: string;
    title: string;
    description: string[];
    tech: string[];
}

export interface Technology {
    technology: string;
    score: string;
}

export interface Project {
    title: string;
    description: string;
    img: string;
    projectUrl: string;
    tech: string[];
}

export interface BuildInfo {
    intro: string;
    repoText: string;
    repoUrl: string;
}
