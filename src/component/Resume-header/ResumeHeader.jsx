import React from "react"
import './ResumeHeader.css'
import Me from '../../assests/59F174CF-DD2D-4D09-BBB4-A6B97F3A0D07.jpg'

export default function ResumeHeader(){
    return(
        <>
            <div className="main-container">
                <h3 className="resume">Digital Resume</h3>
                <div className="container">
                    <div className="img">
                        <img src={Me} alt="cv header"/>
                        <div>
                            <h1>Nalaka Dinesh</h1>
                            <hr />
                            <h3>Software Engineer</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-me">
                <h2>Summery</h2>
                <hr />
                <p className="summery">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellendus iusto alias amet. Eos quidem tempore, iste, dolorem incidunt consequuntur nisi modi aliquam vitae itaque in dolor laudantium impedit placeat.
                Sunt omnis sequi error ex modi quis autem quidem. Est repellendus architecto, atque eum eveniet suscipit! Qui error recusandae ut incidunt, natus animi est labore nihil cupiditate totam soluta sunt?
                </p>
                <p className="binary">01001000 01100101 01101100 01101100 01101111</p>
            </div>
            <span className="next">&#8681;</span>
        </>
    )
}