import React from 'react';
import './Footer.css';
import logo from '../Assets/logo_big.png';
import Whatsapp from '../Assets/whatsapp_icon.png';
import insta from '../Assets/instagram_icon.png';
import pintester from '../Assets/pintester_icon.png';


const Footer = () =>{
    return(
        <>
        <div className='Footer'>
            <div className='f1'>
                <img src={logo} alt='g1'></img>
                <h1>Shopping</h1>
            </div>
            <div className='listed'>
                <ul>
                    <li><a>Product</a></li>
                    <li><a>Shop</a></li>
                    <li><a>About</a></li>
                    <li><a>Cart</a></li>
                    <li><a>Offers</a></li>
                </ul>
            </div>
            <div className='icon2'>
                <img className='rr' src={Whatsapp} alt="ci1"></img>
                <img className='rr' src={insta} alt="ci2"></img>
                <img className='rr' src={pintester} alt="ci3"></img>
            </div>
            <hr></hr>
            <div className='cp'>
               
                <h3>Copyright@2023.All Right Reversed</h3>
            </div>
        </div>
        </>
    )
}
export default Footer;