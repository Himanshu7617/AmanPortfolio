
import SubHeading from "./subheading";
import Heading from "./heading";

export default function ContactForm() {
    return <div className="contactform-container">
        <div className="contact-crossbutton">
            <div className="crossbutton-bar crossbar1"></div>
            <div className="crossbutton-bar crossbar2"></div>
        </div>
        <div className="contact-text">
            <Heading text="Lets" customClass="contact-lets"></Heading>
            <SubHeading text="connect" customClass="contact-connect"></SubHeading>
        </div>

        <form>
            <label for="name">Your name: </label>
            <input type="text" name="name" placeholder="Ross Geller"></input>
            <label for="organisationName">Your Organisation/Company: </label>
            <input type="text" name="organisationName" placeholder="Central Park"></input>
            <label for="email" >Email: </label>
            <input type="text" name="email" placeholder="rossgeller34@gmail.com"></input>
            <label for="message" >Message</label>
            <textarea name="message" placeholder="Hello! Aman, Can you help me with..."></textarea>
            <div className="contact-line">
            <button type="submit" className="contact-submit-button">Send</button>
            </div>
            
        </form>
        

    </div>
}