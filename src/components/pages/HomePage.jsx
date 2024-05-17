import HomeScreen from "../../screens/homeScreen"
import ProjectScreenL from "../../screens/projectScreenL"
import ProjectScreenR from "../../screens/projectScreenR"
import FooterScreen from "../../screens/footerScreen"



export default function Home() {
    return <>
        <HomeScreen></HomeScreen>
        <ProjectScreenL></ProjectScreenL>
        <ProjectScreenR></ProjectScreenR>
        <FooterScreen></FooterScreen>
    </>
}