import { motion } from "framer-motion";
import React, { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import './Testimonials.css';
const Testimonials = () => {
    const transition={type:"spring", duration:3};
    const[selected,setSelected]= useState(0);
    const tLength= testimonialsData.Length;
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What They</span>
            <span>Say About us</span>
            <span>
                {testimonialsData[selected].review}
            </span>

            <span>
                <span style={{color:'var(--orange)'}}>
                {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
         <div className="right-t">
            <motion.div 
            intital={{opacity: 0, x: -100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{opactiy: 1, x: 0}}
            ></motion.div>

            <motion.div
            intital={{opacity:0, x:100}}
            transition={{...transition, duration:2}}
            whileInView={{opactiy:1, x:0}}
            ></motion.div>

             <motion.img
             key={selected}
             intital={{opacity: 0, x: 100}}
             animate={{opactiy: 1, x: 0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}
             src={testimonialsData[selected].image} alt=""/>
             <div className="arrows">
                <img 
                onClick={()=>{
                      selected===0
                      ? setSelected(tLength-1)
                      :setSelected((prev)=> prev-1);
                }}
                      src={leftArrow}  alt=""/>

                <img onClick={()=>{
                      selected===(tLength-1)
                      ?setSelected(0)
                      :setSelected((prev)=> prev+1);
                }}
                      src={rightArrow} alt=""/>
             </div>
        </div>
    </div>
  )
};

export default Testimonials;
