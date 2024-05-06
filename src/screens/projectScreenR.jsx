//projectScreenL.jsx


import ProjectCard from "../components/projectCard";
import ProjectDetailR from "../components/projectDetailR";

export default function ProjectScreenR() {
    return <div className="project-screenright-container">
        
        <ProjectDetailR title="Project" ></ProjectDetailR>
        <ProjectCard></ProjectCard>

    </div>
}