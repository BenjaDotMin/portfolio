import React from 'react';
import Project from "./Project";
import SideProjects from "./SideProjects";
import Contact from './Contact';
import Dots from "../img/dots.svg";
import "./Projects.scss"

function Projects() {
    return (
        <div className="projects section">

            <div className="titles donut parallax__3">
                <h2 className="section__title">Live Projects <img className=" parallax__3" src={Dots} alt="circle" /><img className=" parallax__3" src={Dots} alt="circle" /></h2>
                <p className="section__description">Here's a few projects that I created the front end for. These projects are currently up and running, so please check them out!</p>
                <div className="donut spin"></div>
            </div>

            <div>
                <Project />
                <Project />
            </div>



            <SideProjects />

            <Contact />

            <div className="circle --big parallax__2"></div>
            {/* <div className="square --big parallax__2"></div> */}

        </div>
    )
}

export default Projects
