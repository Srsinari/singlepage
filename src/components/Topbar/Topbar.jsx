import React from 'react'
import "./Topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+(menuOpen && 'active')} id='topbar'>
    <div className='wrapper'>
      <div className='left'>
      <a href='/BD_wishes/intro' className='logo'><img src='./assets/logo3.png' alt=''/></a>
        <a href='/BD_wishes/intro' style={{ fontSize:"20px", marginLeft:"400px"}}>Hfds</a>
        <a href='/BD_wishes/portfolio' style={{fontSize:"20px"}}>AYou dsf</a>
        <a href='/BD_wishes/aboutus' style={{fontSize:"20px"}}>Ab US</a>
        <a href='/BD_wishes/thankyou' style={{fontSize:"20px"}}>Thk You!</a>
        
        
      
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
