 import React from 'react';
import  './Items.css';

import carticon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const  Items = (props) =>
{
    return(
        <>
        <div className='os'>
        <div className='items'>
         <Link to={`/product/${props.id}`}>
        <img className='nine' src={props.image} alt="img11"></img>
        </Link>
       <p>{props.name}</p>
       <div className='items-Price'>
       
        <div className='items-Prices-New'>{props.new_prices}</div>
        <div className='items-Prices-Old'>{props.old_prices}</div>
        <div className='items-Price-New'>{props.new_price}</div>
        <div className='items-Price-Old'>{props.old_price}</div>
        
        <div className='botom'>
        <button>Buy Now</button>
        <img src={carticon} alt="no"></img>
        <p>Add to Cart</p>
        </div>
       

       </div>

        </div>
        </div>
        </>
    )

    
}
export default Items; 

