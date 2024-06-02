import React from 'react';
import arrow from '../Assets/breadcrum_arrow.png';

const BreadCums =(props) =>{
    const {product} = props;
    return(
        
  <>
  <div className='BreadCums'>
     Home  <img src={arrow} alt="12"></img> Shop <img src={arrow} alt="12"></img>
  </div>
  </>
    )
}
export default BreadCums;