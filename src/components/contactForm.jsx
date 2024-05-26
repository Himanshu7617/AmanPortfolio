
import SubHeading from "./subheading";
import Heading from "./heading";
import {motion, AnimatePresence, easeInOut} from "framer-motion";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";



export default function ContactForm() {
    const [isVisible, setIsVisible] = useState(true);
    // const navigate= useNavigate();
    
    function handleCrossBtnClick(){
      
            setIsVisible(!isVisible);

        
    }
    
    return <AnimatePresence mode="wait">
    {isVisible && 
    <>
        <motion.div 
        initial= {{visibility: "hidden"}}
        animate= {{visibility: "visible", transition: {delay: 1}}}
        exit= {{visibility: "hidden", transition:{delay: 0.9}}}
        
        className="contactform-container">
        <div onClick={handleCrossBtnClick} className="contact-crossbutton">
            <div className="crossbutton-bar crossbar1"></div>
            <div className="crossbutton-bar crossbar2"></div>
        </div>
        <div className="contact-text">
            <Heading text="Lets" customClass="contact-lets"></Heading>
            <SubHeading text="connect" customClass="contact-connect"></SubHeading>
        </div>

        <form>
            <label htmlFor="name">Your name: </label>
            <input type="text" name="name" placeholder="Ross Geller"></input>
            <label htmlFor="organisationName">Your Organisation/Company: </label>
            <input type="text" name="organisationName" placeholder="Central Park"></input>
            <label htmlFor="email" >Email: </label>
            <input type="text" name="email" placeholder="rossgeller34@gmail.com"></input>
            <label htmlFor="message" >Message</label>
            <textarea name="message" placeholder="Hello! Aman, Can you help me with..."></textarea>
            <div className="contact-line">
            <button type="submit" className="contact-submit-button">Send</button>
            </div>
            
        </form>
        

    </motion.div>
    <Panels></Panels>
    </>
    }
    
    </AnimatePresence>
}
const Panels = ()=>{
    return <>
    <motion.div 
    initial={{height: 0}}
    animate= {{height: [0,
     window.innerHeight, 0], 
     bottom: [null,0,0], 
     top:[0,null,window.innerHeight],
     }}
    exit={{height: [0, window.innerHeight, 0],bottom: [0, 0, 0], top:[null,0,null]}}
    transition={{duration: 2, ease: easeInOut, times:[0,0.5,1]}}
    
    className="left-panel-background"></motion.div>
    <motion.div
    initial={{height: 0}}
    animate= {{height: [0, window.innerHeight, 0], bottom: [0,0,window.innerHeight], top:[null,0,null]}}
    exit={{height: [0, window.innerHeight, 0],  bottom: [null,0,0], top:[0,null,window.innerHeight]}}
    transition={{duration: 2, ease: easeInOut, times:[0,0.5,1]}} 
    className="right-panel-background"></motion.div>
    </>
}