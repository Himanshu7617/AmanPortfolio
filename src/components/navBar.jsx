
//navBar.jsx
import { Link } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
export default function Navbar(){

    return <AnimatePresence>
    <div className="navbar-container">
        
        <Link className="navbar-links navbar-link1" to="/">Home</Link>
        <Link className="navbar-links navbar-link2" to="/contact">Contact</Link>
        
    </div>
    </AnimatePresence>
}