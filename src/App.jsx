import React, { useState } from "react"
import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/Portfolio"
import Aboutus from "./components/aboutus/Aboutus"
import Testimonial from "./components/testimonial/Testimonial"
import Thankyou from "./components/Contact/thankyou"
import Slidesh from "./components/works/works"
import "./App.scss"
// import Menu from "./components/menu/menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Slideshow } from "@material-ui/icons"



function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      <div className="section">
    <Router basename="/BD_wishes">
    <Routes>
      
      
      <Route path="/BD_wishes" element={<Intro/>}/>
      <Route path="intro" element={<Intro/>}/>
        <Route path="Slide" element={<Slidesh/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Testimonial" element={<Testimonial/>}/>
        <Route path="thankyou" element={<Thankyou/>}/>
      
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
