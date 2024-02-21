import React from 'react';
import adidas from "../../assets/adidas.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import './Reasons.css';


const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
        </div>
        <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className="stroke-text">Why</span>
                <span>Choose Us?</span>
            </div>
      <div className="details">
            
            <div>
                <img src={tick} alt=""></img>
                <span>Over 140+ Expert Coaches</span></div>
            <div>
                <img src={tick} alt="" />
                <span>Get faster Results and more concentration than before</span></div>
            <div>
                <img src={tick} alt="" />
                <span>Diet suggestions according to body</span></div>
            <div>
                <img src={tick} alt="" />
                <span>Reliable Partners</span></div>
            </div>
        <span style={{color:'var(--gray)',
        fontWeight:"normal", }}>
        OUR PARTNERS</span>
        <div className="partners">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={nb} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Reasons;
