//projectScreenL.jsx

import ProjectCard from "../components/projectCard";
import ProjectDetailL from "../components/projectDetailL";

export default function ProjectScreenL() {
    return <div className="project-screenleft-container">
        <ProjectCard></ProjectCard>
        <ProjectDetailL title="Project" ></ProjectDetailL>

    </div>
}