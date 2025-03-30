import { ExternalLink, Github, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Check if the URL is external (starts with http:// or https://) or internal
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Render visit button based on URL type
  const renderVisitButton = (url: string, isSmall: boolean = false) => {
    const className = `gap-1 ${isSmall ? 'size-sm' : ''}`;
    
    if (isExternalUrl(url)) {
      return (
        <Button asChild className={className} onClick={(e) => isSmall && e.stopPropagation()}>
          <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" />
            <span>{isSmall ? 'Visit' : 'Visit Project'}</span>
          </a>
        </Button>
      );
    } else {
      return (
        <Button asChild className={className} onClick={(e) => isSmall && e.stopPropagation()}>
          <Link to={url}>
            <ExternalLink className="h-4 w-4" />
            <span>{isSmall ? 'Visit' : 'Visit Project'}</span>
          </Link>
        </Button>
      );
    }
  };

  return (
    <>
      <Card 
        className="overflow-hidden card-hover cursor-pointer" 
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {project.categories.map((category, index) => (
              <Badge key={index} variant="outline" className="font-normal">
                {category}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm" className="gap-1" onClick={(e) => e.stopPropagation()}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
          {project.projectUrl && renderVisitButton(project.projectUrl, true)}
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto bg-background/70 border border-border/40 shadow-lg">
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video w-full overflow-hidden rounded-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col space-y-4">
              <DialogDescription className="text-base">
                {project.description}
              </DialogDescription>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Button asChild variant="outline" className="gap-1">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    <span>GitHub Repository</span>
                  </a>
                </Button>
                {project.projectUrl && renderVisitButton(project.projectUrl)}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
