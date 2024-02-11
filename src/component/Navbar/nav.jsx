import React, { useState } from "react";
import './nav.css'
import {Link} from 'react-scroll'

const Navbar = () =>{
    const [showMenu,setShowMenu] = useState(false);
    return(
        <div className="navbar">
            <p className="nav-logo">nalaka<span>.me</span></p>
            <div className="navmenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Client</Link>
            </div>
            <button className="nav-btn">
               <span>&#9993; </span>  Contact me
            </button>

            <p className="mobo" onClick={()=> setShowMenu(!showMenu)}>&#9776;</p>
            <div className="mobomenu"  style={{display: showMenu?'flex':'none'}}>
                <Link className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
                <Link className="listItem" onClick={()=>setShowMenu(false)} >About</Link>
                <Link className="listItem" onClick={()=>setShowMenu(false)} >Portfolio</Link>
                <Link className="listItem" onClick={()=>setShowMenu(false)} >Client</Link>
                <Link className="listItem" onClick={()=>setShowMenu(false)} >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;