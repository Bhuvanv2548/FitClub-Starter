import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className="Hero">
        <div className="left-h">
            <Header/>
            {/*the-best-ad*/}
            <div className="the-best-ad">
              <div></div>
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
            {/* Hero Buttons */}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Lean More</buttons>
            </div>

        </div>
        <div className="right-h">Right Side</div>
    </div>
  )
}

export default Hero
