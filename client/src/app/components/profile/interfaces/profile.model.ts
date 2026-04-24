export interface Profile {
  name: string;
  jobTitle: string;
  strapLine1: string;
  strapLine2: string;
  strapLine3: string;
  introHeading1: string;
  introHeading2: string;
  intro1: string;
  intro2: string;
  intros: string[];
  socials: Social[];
  experiences: Experience[];
  technologies: Technology[];
  projects: Project[];
  courses: Course[];
  buildInfo: BuildInfo;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
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

export interface Course {
  title: string;
  provider: string;
  dateCompleted: string;
  certificateURL: string;
}

export interface BuildInfo {
  intro: string;
  repoText: string;
  repoUrl: string;
}
