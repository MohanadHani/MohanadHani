import { FC } from "react";
import Project from "@/app/components/Projects/Project";
import { projects } from "@/app/data/projects";
import Image from "next/image";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Projects;
