import React, { useState } from "react";
import './nav.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <RouterLink to="/" className="nav-logo">nalaka<span>.me</span></RouterLink>
      <div className="navmenu">
        <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</ScrollLink>
        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</ScrollLink>
        <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</ScrollLink>
        <ScrollLink activeClass="active" to="skills-slider" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</ScrollLink>
      </div>
      <button className="nav-btn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <span>&#9993; </span>  Contact me
      </button>

      <p className="mobo" onClick={() => setShowMenu(!showMenu)}>&#9776;</p>
      <div className="mobomenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</ScrollLink>
        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</ScrollLink>
        <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
        <ScrollLink activeClass="active" to="skills-slider" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</ScrollLink>
        <RouterLink to="/resume" className="listItem" onClick={() => setShowMenu(false)}>Resume</RouterLink>
        <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
