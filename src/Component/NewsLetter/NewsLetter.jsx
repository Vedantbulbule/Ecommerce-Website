import React from 'react';
import './NewsLetter.css';

const NewsLetter = () =>{
    return(
        <>
        <div className='NewsLetter'>
        <h1>Subscribe to NewLetter</h1>
        <p>You Will Never Miss Our Podcast,Latest news Etc</p>
        <div >
            <input type='email' placeholder='Enter Your Emailid'>

            </input>
            <button >Subscribe</button>
        </div>
        </div>
       
        </>
    )
}
export default NewsLetter;