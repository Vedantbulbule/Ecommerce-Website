import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCums from '../Component/Breadcums/Breadcums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
const Product= () =>{
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return(
        <div>
          {/* <BreadCums product ={product}/> */}
          <BreadCums product = {product} />
          <ProductDisplay product={product}/>
        </div>
    )
}
export default Product;