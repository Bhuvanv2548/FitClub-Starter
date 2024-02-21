import React from 'react';
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={github} alt="" />
        <img src={Linkedin} alt=""/>
        <img src={instagram} alt="" />
        </div>
      <div className="logo-f">
        <img src={logo} alt="" />
      </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer
