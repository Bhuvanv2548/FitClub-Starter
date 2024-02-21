import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './Join.css';

const Join = () => {
    const form=useRef()
    const handleClick = () => {
      alert('Joined Successfully!Check e-mail');
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

    return (
    <div className="join" id="join-us">
        <div className="left-j">
             <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            
             </div>
             <div>
                <span>YOUR FITNESS</span>
                <span className="stroke-text">WITH US</span>
             </div>
        </div>

        <div className="right-j">
         <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email address"/>

                     <button className='btn-j' onClick={handleClick}>Join Now</button>
                     

         </form>
        </div>
    </div>
  )
}

export default Join;
