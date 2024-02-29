import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './contact.scss';
import Facebook from '../../assests/fb.png';
import Instagram from '../../assests/in.png';
import Linkdin from '../../assests/link.png';
import Github from '../../assests/git.png';
import emailjs from '@emailjs/browser';
import { faCss3, faGitAlt, faHtml5,  faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Contact = ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_usjgxrj', 'template_0sfw6b7', form.current, {
            publicKey: 'fDJ1iQS_P9SHT9KRV',}).then(() => {
                console.log('SUCCESS!');
                alert("Mail send");
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert("Mail send failed");
            },
        );
    };
    return(
        
        <div className="contactPage">
        <div id="skills-slider">
            <h1 className="contactPageTitle">My Skills</h1>
            <p className="skillDes">
                I am prefer to use and work using various technology.
                These are few example for that.
            </p>
            <div className="skill-container">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#61dbfb"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNodeJs} color="#61dbfb"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span id="contactDes">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                <input type="email" className="email" placeholder="Your Email" name="from_email" />
                <textarea name="message" rows="5" className="massage" placeholder="Your Message" ></textarea>
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