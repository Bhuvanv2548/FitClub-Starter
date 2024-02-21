import React from 'react';
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from '../../data/programsData';
import './Programs.css';
const Programs = () => {
  return (
    <div className="programs" id="programs">
    {/*Header*/}
    <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Features & Programs</span>
        <span className="stroke-text">To be a better you</span>
    </div>
    <div className="programs-category">
        {programsData.map((program)=>
        <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow}/>
            </div>

        </div>
        )}
    </div>
    </div>
  )
}

export default Programs
