import { motion } from "framer-motion";
import React from 'react';
import { useNavigate } from "react-router-dom";
import calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from '../Header/Header';
import './Hero.css';
const Hero = () => {
  const navigate=useNavigate();
  const transition={type:'spring', duration:3}
  const heartbeatAnimation = {
    scale: [1, 1.3, 1], // keyframes for the heartbeat animation
    transition: {
      duration: 1, // duration of one heartbeat cycle
      repeat: Infinity, // repeat the animation indefinitely
      repeatType: 'reverse', // reverse the animation after each cycle
    },
  };

  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/*the-best-ad*/}
            <div className="the-best-ad">
              <motion.div
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition, type:'tween'}}
              ></motion.div>
              <span>The Best Fitness Partner of Yours</span>
            </div>

            {/*The Hero Text Heading*/}
            <div className="hero-text">
              <div>
                <span className="stroke-text">Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
                <div className="span">
                  In here we will help you to shape and build your ideal body and make you live up your life to the fullest.
                </div>
            </div>

            {/* Figures */ }
            <div className="figures">
               <div>
                <span>+140</span>
                <span>Expert Coaches</span>
               </div>
               <div>
                <span>+ 1000</span>
                <span>Users Already</span> 
               </div>
               <div>
                <span>+50</span>
                <span>Workout Programs</span>
               </div>
            </div>
            <div><span><br/></span></div>
            {/* Hero Buttons */}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Lean More</buttons>
            </div>

        </div>
        <div className="right-h">
        <button className="btn" onClick={() => navigate("/loginsignup")}>Join Now</button>

        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <motion.img src={Heart} alt="Heartbeat" animate={heartbeatAnimation}/>
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back"/>
        
        {/* Calories */}
        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}
        className="calories">
          <img src={calories} alt=""/>
          <div>
          <span>Calories Burned</span>
          <span> 545 kcal</span>
          </div>
        </motion.div>
        </div>

    </div>
  );
};

export default Hero