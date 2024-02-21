import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';
const Header = () => {
  const navigate=useNavigate();
  const navToPage=(url)=>{
    navigate(url)
  }
  return (
    <div className="Header">
        <img src={Logo} alt="Fitness Club Logo" classname='logo'/>
        <ul className='header-menu'>
        {/* <button className="btn" onClick={() => navToPage("/")}>Home</button>
        <button className="btn" onClick={() => navToPage("/programs")}>Programs</button> */}
          <li>Home</li>
          <li>Programs</li>
          <li>Why Us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header