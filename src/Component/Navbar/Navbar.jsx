import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import './Navbar.css';
import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar(){
    const [menu,setMenu] = useState("Shop");

    return(
        <>
        <div className="Navbar">
        <div className="Nav-logo">
        <img src={logo}  alt="logo"/>
        <p>SHOPPING</p>
        </div>

        
            <ul className='Navmenu'>
                <li onClick={() =>{setMenu("Shop")}}><NavLink className="g1" to="/Shop">Shop</NavLink>{menu == "Shop" ? <hr></hr>:<></> }</li>
                <li onClick={() => {setMenu("Product")}}><NavLink className="g1" to = "/Product">Product</NavLink>{menu == "Product" ? <hr></hr>:<></>}</li>
                <li onClick={() => {setMenu("LoginSignup")}}><NavLink className="g1" to="/LoginSignup">LoginSignup</NavLink>{menu == "LoginSignup" ? <hr></hr>:<></>}</li>
                <li onClick={() => {setMenu("ShopCategory")}}><NavLink className="g1" to="/ShopCategory">ShopCategory</NavLink>{menu == "ShopCategory" ? <hr></hr>:<></>}</li>
                <li onClick={() => {setMenu("men")}}><NavLink className="g1" to="/men">Mens</NavLink>{menu == "men" ? <hr></hr> :<></>}</li>
                <li onClick={() => {setMenu("women")}}><NavLink className="g1" to="/women">Women</NavLink>{menu == "women" ? <hr></hr>:<></>}</li>
                <li onClick={() => {setMenu("kid")}}><NavLink className="g1" to="/kid">Kids</NavLink>{menu =="kid" ?  <hr></hr> : <></>}</li>
                
            </ul>


       
        <div className="Nav-login-cart">

            <button ><NavLink className="nv2" to="/Signed">Sign in</NavLink></button>

        <img src={cart}  alt="cart_icon"/>

        <div className='Nav-cart-count'>0</div>



        </div>
        </div>
       
        
        </>
    )
}
export default Navbar;