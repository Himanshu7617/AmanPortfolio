//projectScreenL.jsx


import { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";
import ProjectDetailR from "../components/projectDetailR";

export default function ProjectScreenR() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWindowWidth(window.innerWidth) })
    }, [])

    return windowWidth > 769 ? <div className="project-screenright-container">
        
        <ProjectDetailR title="Project" ></ProjectDetailR>
        <ProjectCard></ProjectCard>
        </div> 
        :
        <div className="project-screenright-container">
            <ProjectCard></ProjectCard>
            <ProjectDetailR title="Project" ></ProjectDetailR>


        </div>
        ;
}