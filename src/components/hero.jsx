
//hero.jsx

import img from "../images/profile.png"
import Heading from "./heading";
import SubHeading from "./subheading";

export default function Hero() {
    return (
        <div className="hero-container">
            
            <img alt="profilephoto" src={img} className="hero-img" />
            <SubHeading text="Graphic" customClass= "hero-graphic"></SubHeading>
            <Heading text= "Designer" customClass="hero-designer"></Heading>
        </div>
    )

}

