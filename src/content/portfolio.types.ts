export interface NavLabels {
  about: string;
  work: string;
  contact: string;
}

export interface NavbarContent {
  brandName: string;
  brandTagline: string;
  labels: NavLabels;
}

export interface HeroContent {
  heading: string;
  subtitleLine1: string;
  subtitleLine2: string;
  aboutLabel: string;
  projectsLabel: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  logo: string;
  title: string;
  duration: string;
  description: string[];
  tech: string[];
}

export interface ExperienceContent {
  eyebrow: string;
  heading: string;
  items: ExperienceItem[];
}

export interface TechItem {
  name: string;
  asset: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export interface TechContent {
  eyebrow: string;
  heading: string;
  groups: TechGroup[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
}

export interface ProjectsContent {
  eyebrow: string;
  heading: string;
  items: ProjectItem[];
}

export interface ContactContent {
  heading: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface PortfolioContent {
  documentTitle: string;
  navbar: NavbarContent;
  hero: HeroContent;
  socialLinks: SocialLinks;
  about: AboutContent;
  experience: ExperienceContent;
  tech: TechContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: string;
}
