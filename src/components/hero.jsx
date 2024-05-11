
//hero.jsx

// import img from "../images/profile.png"
import Heading from "./heading";
import SubHeading from "./subheading";
import video from "../video/aman22.mp4";
import Navbar from "./navBar";

export default function Hero() {
    return (
        <div className="hero-container">
            <Navbar></Navbar>
            <video className="homeScreen-background-video" loop autoPlay muted>
                <source src={video} />
            </video>
            {/* <img alt="profilephoto" src={img} className="hero-img" /> */}
            <SubHeading text="Graphic" customClass= "hero-graphic"></SubHeading>
            <Heading text= "Designer" customClass="hero-designer"></Heading>
        </div>
    )

}

