import React from "react";
import './portfolio.css'
import Ecommerce from '../../assests/e-commerce.png';
import Git from '../../assests/git.png' 
import Hand from '../../assests/hand.png'; 


export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
};

const Portfolio = () => {
    return(
        <section id="works">
            <div className="portfolio">
                <h2>My Works</h2>
                <p>Here are few project done by me..</p>
                <div className="projects">
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <p onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></p></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Hand Me Over</h3>
                            <img src={Hand} alt="HandMeover" />
                            <p className="about-project">Mern Project(Ongoing) Collab with team</p>
                        </span> 
                            <p>Source Code:- <p onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/HandMeOver")}><img src={Git} alt="Link" style={{width:"20px"}}/></p></p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Portfolio;