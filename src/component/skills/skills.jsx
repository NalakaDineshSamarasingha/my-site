import React from "react";
import './skills.css';

const Skill = () => {
    return(
        <div className="skills" id="skills">
            <span className="skill-title">What I do</span>
            <span className="skill-description">As a professional web developer and undergraduate student, I specialize in crafting innovative, user-centric websites with expertise in programming languages and design principles.</span>
            <div className="user-skills">
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9812;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">UI/UX Design</h2>
                        <p className="paragr">Design an user friendly and well interactivity UI/UX.</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9813;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">Website Design</h2>
                        <p className="paragr">Using MERN stack design whole website ASAP.</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <span className="skill-bar-image">&#9814;</span>
                    <div className="skill-bar-text">
                        <h2 className="heading">App Design</h2>
                        <p className="paragr">Currently Studying...............</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;