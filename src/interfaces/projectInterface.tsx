export interface IProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  img: string[];
  github: string;
  website?: string;
  technologies: string[];
}
