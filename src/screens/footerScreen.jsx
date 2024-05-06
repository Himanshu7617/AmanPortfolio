//footerScreen.jsx

import Heading from "../components/heading"


export default function FooterScreen(){
    return <div className="footer-screen-container">
        <div className="footer-tagline">
            <Heading text="Let's" customClass="footer-lets"></Heading>
            <Heading text="create" customClass="footer-create"></Heading>
        </div>
        <div className="footer-line"></div>
        <button className="footer-contact-button">Contact</button>
    </div>
}