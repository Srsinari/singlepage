
import "./intro.scss"
import Typewriter from 'typewriter-effect';
import Confetti from "react-confetti";
import Birthday from "./birthday.jsx"


export default function Intro() {
  return (   
    <div className='intro' id='intro'>
    
    <div className='left'>   
     
      <div className='imgcontainer' >
      
        <img src="./assets/image.jpg" alt='DP' ></img>
        
      </div>
    </div>
    <div className='right'>
    <Confetti/>
    <div className='wrapper'>
      
      <h1>Celebrating You Today!</h1>
      <h2><span><Typewriter
  options={{
    strings: ['My Love', 'BAE', 'Baby', 'Motu Baby', "Chetu"],
    autoStart: true,
    loop: true,
    cursor:"",  
    
  }}
  
/></span></h2>
<br></br>
<Birthday/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<h3>With all my love,</h3>
<h4>Sunny Sinari</h4>
    </div>
    </div>
      
    </div>
  )
}
