import hand_icon from '../Assets/hand_icon.png';
import Arrow from '../Assets/arrow.png';
import Sale from '../Assets/Sale.avif';
import './Hero.css';
import Hero_image from '../Assets/hero_image.png';



import React from 'react';
const Hero = () =>{
    return(
        <div className='hero'>
            
         <div className='hero-left'>
            <h2 >NEW ARRIVALS ONLY</h2>
            <div>
            <div className='hero-hand-icon'>
              <p>New</p> 
              <img  src={hand_icon} ></img> 
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
            
            </div>
            
        <div className='hero-latest-btn'>
        <div >Latest Collection</div>
        <img src={Arrow} alt="abc"></img>
        </div>

        </div>
        <div className='hero-right'>
        <img  src={ Hero_image} alt="kk"></img>
       </div>
         
       
        </div>
       
    )
}
export default Hero;