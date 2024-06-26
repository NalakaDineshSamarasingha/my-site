import React from "react";
import './intro.scss'
import BG from '../../assests/Hehe.png';
import { Link as RouterLink } from 'react-router-dom';



const Intro = () => {
    return(
        <div className="intro" id="intro">
            <div className="introContent">
                <span className="hello">Hello World,</span>
                <span className="introText">I'm <span className="introName">Nalaka</span> <br />Developer</span>
                <p className="introPara">
                    I am a skilled Full Stack developer with experience in creating <br />visually appealing and friendly website  
                </p>
                <RouterLink to="resume"><button className="btn1">&#9874; Resume</button></RouterLink>
            </div>
            <img src={BG} alt="Bg" className="bg"  />
        </div>
    )
}
export default Intro;