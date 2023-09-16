import React from 'react'
import "./Topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+(menuOpen && 'active')} id='topbar'>
    <div className='wrapper'>
      <div className='left'>
      <a href='intro' className='logo'><img src='../assets/logo3.png' alt=''/></a>
        <a  href='intro' style={{ fontSize:"20px", marginLeft:"400px"}}>Home</a>
        <a  href='portfolio' style={{fontSize:"20px"}}>About You</a>
        <a href='aboutus' style={{fontSize:"20px"}}>About US</a>
        <a href='thankyou' style={{fontSize:"20px"}}>Thank You!</a>
        
        
      
            </div>  
      {/* <div className='right'>
      <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
      </div>
    
      </div> */}
    </div>
      
    </div>
  )
}
