import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';


import Items from '../Component/Items/Items';

const ShopCategory = (props) =>{
  const [menu,setMenu] = useState("Shop");
    const {all_product} = useContext(ShopContext);
    return(
      
        <div className='shop-category'>
           {/* <img  className='ban'src={props.banner} alt="" />
                <ul>
                  <li><a href="men">Mens</a></li>
                  <li><a href="women">Women</a></li>
                  <li><a href="kid">Kid</a></li>
                </ul> */}

          <img  className='shopcategory-banner'src={props.banner} alt="" />
          <div className="shopcategory-indexSort"> 
          <p>
            <span>Showing 1-12</span> out of 36 product
          </p>
         
          </div>
          <div className="shopcategory-products">
            {all_product.map((item,i)  => {
             if (props.category===item.category){
               return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             }
            
            })}
          </div>
          <div className="shopcategory-loadmore">
            Explore More
          </div>
        </div>
    )
}
export default ShopCategory;