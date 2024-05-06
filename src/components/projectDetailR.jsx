//projectDeatailR.jsx


import SubHeading from "./heading"


export default function ProjectDetailR({title,desc}){
    return <div className="project-detailright-container">
        <SubHeading text={title} customClass="project-title"></SubHeading>
        <p className="project-desc">{desc}</p>
    </div>
}