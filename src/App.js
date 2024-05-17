
/**
 * create a home page 
 * create project pages 
 * create a footer page
 * create a separate form overlay kinda that appears when i click on contact 
 * 
 */
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/pages/HomePage"


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
  </Routes>
  </BrowserRouter>
}