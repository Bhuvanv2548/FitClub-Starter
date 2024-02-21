import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import email_icon from "../../assets/email.png";
import password_icon from '../../assets/password.png';
import user_icon from "../../assets/person.png";
import './LoginSignup.css';

const LoginSignup = ()=> {
  const form=useRef()
  const handleClick = () => {
    alert('Signed up Successfully!');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j27sd3g', 'template_x31k3m9', form.current, 'onToBxMwTVYgidUoV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    const[action,setAction]= useState("Login");
  return (
    <div className='container'>
        <div className="header">
        <div className="text">{action}</div> 
        <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className='input'>
        <img src={user_icon} alt=""/> 
        <input placeholder="Name" type="text"/>
        </div>}
        
        <div className='input'>
        <img src={email_icon} alt=""/> 
        <input placeholder="Email ID" type="email"/>
        </div>

        <div className='input'>
        <img src={password_icon} alt=""/> 
        <input type="password" placeholder="Password"/>
        </div>
        <div className="right-j">
         <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <div>
                  <button className='btn-jj' onClick={handleClick}>Submit</button>
                </div>
         </form>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Forgot Password?<span>Click Here</span></div>}

        <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
         </div>
         </div>
         </div>
  );
};

LoginSignup.propTypes = {}

export default LoginSignup