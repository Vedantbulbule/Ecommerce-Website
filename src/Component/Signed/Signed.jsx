// 

import React, { Component } from 'react';
import './Signed.css';
import { Link } from 'react-router-dom';
export default class Signed extends Component{


  constructor(props){
    super(props)
    this.state ={
        fname:"",
        password:""
     };
     this.handleSubmit  = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    const{fname,password} = this.state;
    console.log(fname,password);
  }

render(){
    return(
        <div   className='loginsignup'  >
            <form onSubmit = {this.handleSubmit}>
        <div className="loginsignup-container">
            <h1>Login</h1>
            <div className="loginsignup-fields">
                <input type='text' placeholder='Your Name' 
                onChange={e =>this.setState({fname:e.target.value})}/>
                <input type='password' placeholder='Password' 
                onChange={e =>this.setState({password:e.target.value})}/>
                
                <button type="submit">Continue</button>
            </div>
           
        <p className="loginsignup-login">Not a member? <Link to='/Login'><span>SignUp</span></Link></p>
        <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        </div>
        </form>
        </div>
    )
}
}


