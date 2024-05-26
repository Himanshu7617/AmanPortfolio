
/**
 * create a home page 
 * create project pages 
 * create a footer page
 * create a separate form overlay kinda that appears when i click on contact 
 * 
 */
import { Routes, Route} from "react-router-dom"

import Home from "./components/pages/HomePage"
import ContactForm from "./components/contactForm"
import { AnimatePresence } from "framer-motion"

export default function App() {
  return  <AnimatePresence>
  
 
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/contact" element={<ContactForm></ContactForm>}></Route>
  </Routes>
  
  
  </AnimatePresence>
}