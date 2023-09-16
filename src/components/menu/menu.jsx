import React from 'react'
import "./menu.scss"

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen && "active")}>
    <ul>
    <li>
    <a href='intro' onClick={()=>setMenuOpen(false)}>Home</a>
    </li>
    <li>
    <a href='portfolio' onClick={()=>setMenuOpen(false)}>Gallery</a>
    </li>
    <li>
    <a href='aboutus' onClick={()=>setMenuOpen(false)}>About Us</a>
    </li>
    <li>
    <a href='testimonial' onClick={()=>setMenuOpen(false)}>About You</a>
    </li>
    <li>
    <a href='contact' onClick={()=>setMenuOpen(false)}>Thank You!</a>
    </li>        
    </ul>
      
    </div>
  )
}
