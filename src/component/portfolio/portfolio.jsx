import React from "react";
import './portfolio.css'
import Ecommerce from '../../assests/e-commerce.png';
import Git from '../../assests/git.png'


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
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    <div className="project">
                        <span onClick = {() => openInNewTab("https://mern-nike-clone.netlify.app/")}>
                            <h3 className="project-title">Nike Clone</h3>
                            <img src={Ecommerce} alt="e-commerce" />
                            <p className="about-project">Simple e-commerce website using MERN Stack</p>
                        </span> 
                            <p>Source Code:- <a onClick={()=> openInNewTab("https://github.com/NalakaDineshSamarasingha/Nike_Clone")}><img src={Git} alt="Link" style={{width:"20px"}}/></a></p>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}

export default Portfolio;