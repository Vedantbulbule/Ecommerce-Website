import React from 'react';
import "./Popular.css";
import Items from '../Items/Items'
import data_product from '../Assets/data';

const Popular =()=>{
    return(
        <>
         <div className='Popular'>
            <h1>Popular in </h1>
            <hr></hr>
            <div className='Popular-Items'>
            {data_product.map((items,i) => {
                return(
                    <>
                    <Items key ={i} id={items.id} name ={items.name} image ={items.image} new_prices ={items.new_price} old_prices ={items.old_price} >
                    </Items>

                    </>
                )
            })}
            </div>


 </div>
        </>
    )
}
export default Popular;