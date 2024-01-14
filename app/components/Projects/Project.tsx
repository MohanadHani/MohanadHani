import { FC } from "react";
import { project } from "@/app/data/projects";
import Image from "next/image";
import "./Projects.scss";

interface ProjectProps {
  project: project;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div key={project.id} className="project">
      <div className="image">
        <Image src={project.image} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Project;