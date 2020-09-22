import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import './About.scss';
import Projects from './Projects';


gsap.registerPlugin(ScrollTrigger);

function About() {

    useEffect(() => {

        return () => { }
    }, [])

    return (
        <div className="about">
            <Projects />
        </div>
    )
}

export default About
