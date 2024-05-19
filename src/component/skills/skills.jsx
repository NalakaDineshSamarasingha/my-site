import React from "react";
import './skills.css';

const Skill = () => {
    return(
        <div className="skills" id="skills">
            <span className="skill-title">Who am I</span>
            <span className="skill-description">As a professional engineer and undergraduate student, I am specialize in crafting innovative, user-centric product with expertise in programming languages and design principles.</span>
            <div className="user-skills">
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9812;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">Problem Solving</h2>
                    </div>
                </div>
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9813;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">Building New Things</h2>
                    </div>
                </div>
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9814;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">Explore New Technology</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;