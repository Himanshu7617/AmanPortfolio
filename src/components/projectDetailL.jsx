//projectDetailL.jsx


import SubHeading from "./heading"


export default function ProjectDetailL({title,desc}){
    return <div className="project-detailleft-container">
        <SubHeading text={title} customClass="project-title"></SubHeading>
        <p className="project-desc">{desc}</p>
    </div>
}