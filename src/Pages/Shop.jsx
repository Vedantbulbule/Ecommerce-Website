import React from 'react';
import Hero from '../Component/Hero/Hero';
import Popular from '../Component/Popular/Popular';
import Hero2 from '../Component/Hero2/Hero2';
import Exclusive from '../Component/Exclusive/Exclusive'
import NewsLetter from '../Component/NewsLetter/NewsLetter';
import Footer from '../Component/Footer/Footer';

const Shop = () =>{
    return(
        <div>
            
            <Hero/>
            <Popular/>
            <Hero2/>
            <Exclusive/>
            <NewsLetter/>
            {/* <Footer/> */}
        </div>
    )
}
export default Shop;