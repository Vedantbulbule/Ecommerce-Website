import React from 'react';
import './Exclusive.css';
import Items2 from '../Items2/Items2';
import new_collections from '../Assets/new_collections';

const Exclusive =() =>{
    return(
        <>
      <div className='Exclusive'>
        <h2>Exclusive Item's</h2>
        <hr></hr>
    <div className='Exclusive_Items2'>
        {new_collections.map((content1,i) =>{
            return(
                <>
                <Items2 key={i} id={content1.id} name={content1.name} image ={content1.image} new_price={content1.new_price} old_price={content1.old_price}>
               </Items2>
                </>
            )

        })}
    </div>
      </div>
        </>
    )
}
export default Exclusive;