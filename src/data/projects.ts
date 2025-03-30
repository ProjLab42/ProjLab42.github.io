export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    categories: string[];
    githubUrl: string;
    projectUrl: string | null;
    image: string;
  }
  
  export const projects: Project[] = [
    {
        id: 1,
        title: "WitchCraft",
        description: "A powerful CV management tool that enables quick creation of tailored, professional resumes.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        categories: ["Web Development", "LLM Applications"],
        githubUrl: "https://github.com/ProjLab42/WitchCraft",
        projectUrl: "/witchcraft",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
    },

  ];
  
  export const categories = [...new Set(projects.flatMap(project => project.categories))];
  