import React, { useState } from "react";
import './nav.css'
import {Link} from 'react-scroll'

const Navbar = (props) =>{
    const [showMenu,setShowMenu] = useState(false);
    return(
        <div className="navbar">
            <p className="nav-logo">nalaka<span>.me</span></p>
            <div className="navmenu">
                <Link  activeClass="active"  to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='skills-slider' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            </div>
            <button className="nav-btn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <span>&#9993; </span>  Contact me
            </button>

            <p className="mobo" onClick={()=> setShowMenu(!showMenu)}>&#9776;</p>
            <div className="mobomenu"  style={{display: showMenu?'flex':'none'}}>
                <Link activeClass="active" to='/' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Portfolio</Link>
                <Link  activeClass="active" to='skills-slider' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(false)} >Skills</Link>
                <Link  activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;