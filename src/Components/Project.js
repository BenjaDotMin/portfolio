import React, { useEffect } from 'react';
import Button from './Button';
import "./Project.scss";
import HoverInfo from './HoverInfo';
//import HoverChart from './HoverChart';
import Dots from "../img/dots.svg";

function Project() {

    useEffect(() => {

        return () => { }
    }, [])

    return (
        <div className="project">
            <div className="project__info">
                <h2 className="project__title">Project title</h2>
                <p>Some blurb here some blurb here some blurb here some blurb here some blurb here</p>
                <Button />
            </div>
            <div className="project__image">
                <div className="project__overlay parallax__2"></div>
                {/* <HoverInfo position="--b" title="Something here please" subtitle="something here" percent="27" /> */}
                <HoverInfo dots />
                {/* <HoverChart title="Something here" subtitle="something here" /> */}
                <img className="dots main parallax__1" src={Dots} alt="dots pattern" />
                <img className="main__image" src="https://source.unsplash.com/WLUHO9A_xik/1033x500" alt="project name here" />

                <div className="project__mobile parallax__2">
                    <img className="mobile__image" src="https://source.unsplash.com/WLUHO9A_xik/220x400" alt="mobile version" />
                </div>

                <div className="project__glass parallax__1">
                    <div className="reflection parallax__2"></div>
                </div>
            </div>
        </div>
    )
}

export default Project
