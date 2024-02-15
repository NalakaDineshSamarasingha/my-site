import React, { useRef } from "react";
import './contact.css';
import Facebook from '../../assests/fb.png';
import Instagram from '../../assests/in.png';
import Linkdin from '../../assests/link.png';
import Github from '../../assests/git.png';
import emailjs from '@emailjs/browser';

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