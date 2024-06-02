import React from 'react';
import './Items2.css';
import carticon from '../Assets/cart_icon.png';

//function based component.
const Items2 =(props) =>{
    return(
        <>
        
        <div className='Items2'>
            <img className="ten" src={props.image} alt="Ig1"></img>
            <p>{props.name}</p>
               <div className='Items2_Price'>
                
                 <div className='Items2_Price_New'>{props.new_price}</div>
                 <div className='Items2_Price_Old'>{props.old_price}</div>
                 
            
                
        </div>
        
               <div className='bottom1'>
                 <button>Buy Now</button>
                <img src={carticon} alt="no"></img>
                <p>Add To Cart</p>
        </div>
        </div>
        
        </>
    )
}
export default Items2;