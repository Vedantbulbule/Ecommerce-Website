import React from 'react';
import icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import Ex from '../Assets/exclusive_image.png';
import './Hero2.css';

const Hero2= () =>
{
    return(
        <>
        <div className='Hero2'>
            <div className='Hero2-left-Second'>
                <h1>Exclusive Offer Only</h1>
                <div className='GN'>
                    <div className='Hero2_hand'>
                        <h3>For you</h3>
                        <img src={icon} alt="ic2"></img>
                    </div>
                        <h2>Exclusive Offer</h2>
                        <h2>Only for Best Seller Product</h2>
                </div>

                <div className='Latest-Btn-Second '>
                    <div>Exclusive Collection</div>
                    <img src={arrow} alt="arr1"></img>
                </div>

            </div>
            <div className='Hero2-Right-Second'>
                <img src={Ex} alt='ei'></img>
            </div>
        </div>
        </>
    )
} 
export default Hero2;