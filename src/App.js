
/**
 * create a home page 
 * create project pages 
 * create a footer page
 * create a separate form overlay kinda that appears when i click on contact 
 * 
 */

import HomeScreen from "./screens/homeScreen"
import ProjectScreenL from "./screens/projectScreenL"
import ProjectScreenR from "./screens/projectScreenR"
import FooterScreen from "./screens/footerScreen"


export default function App() {
  return <>
    <HomeScreen></HomeScreen>
    <ProjectScreenL></ProjectScreenL>
    <ProjectScreenR></ProjectScreenR>
    <FooterScreen></FooterScreen>
  </>
}