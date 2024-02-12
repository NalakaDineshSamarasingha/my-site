import React from "react";
import './contact.css';
import Facebook from '../../assests/fb.png';
import Instagram from '../../assests/in.png';
import Linkdin from '../../assests/link.png';
import Github from '../../assests/git.png';

const Contact = ()=>{
    return(
        <div className="contactPage">

        
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span id="contactDes">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="email" className="email" placeholder="Your Email" />
                <textarea name="message" rows="5" className="massage" placeholder="Your Message"></textarea>
                <button className="submitbtn" type="submit" value="send">Submit</button>
                <div className="links">
                    <img src={Facebook} alt="Facebook" style={{width:"30px"}} className="link"/>
                    <img src={Instagram} alt="Instergram" style={{width:"30px"}} className="link" />
                    <img src={Linkdin} alt="Linkdin" style={{width:"30px"}} className="link"/>
                    <img src={Github} alt="Github" style={{width:"30px"}} className="link"/>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Contact;