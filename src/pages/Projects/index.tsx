import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "@/data/projects";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categories.includes(selectedCategory))
    : projects;

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-bold">Our Projects</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Explore the diverse range of projects developed within the Projlab42 community.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="mb-2"
        >
          All Projects
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No projects found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
