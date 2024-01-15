import {FC} from "react";
import {project} from "@/app/data/projects";
import Image from "next/image";
import "./Projects.scss";

interface ProjectProps {
    project: project;
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <a href={project.link} key={project.id} className="project">
            <div className="image">
                <Image src={project.image} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className="overlay"></div>
            <div className="info">
                <p className="name"><span>{project.name}</span> - {project.description}</p>
                <div className="technologies">
                    {project.technologies.map(technology => (
                        <p>{technology}</p>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Project;
