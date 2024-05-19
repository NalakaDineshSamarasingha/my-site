import React from "react";
import Intro from "../component/Intro/intro";
import Skill from "../component/skills/skills";
import Portfolio from "../component/portfolio/portfolio";
import Contact from "../component/contact/contact";

export default function HomePage(){
    return(
        <div>
            <Intro/>
            <Skill/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}