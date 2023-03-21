import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import  Home  from "./components/Home/Home";
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About";

export default function App() {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work/>} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Routes>  
      
      


    </div>
  )
}





