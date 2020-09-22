import React from 'react';
import "./HoverInfo.scss";
import CodeIcon from '@material-ui/icons/Code';
import Dots from "../img/dots.svg";


function HoverInfo({ dots }) {
    return (
        <div className="hover parallax__4">
            <div className="hover__inner">
                <div className="hover__outer">
                    <span><CodeIcon /></span>
                </div>
                <h4>Tech stack</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            {dots ? (
                <><img className="dots" src={Dots} alt="dots pattern" />
                    <img className="dots" src={Dots} alt="dots pattern" /></>
            ) : ""}

        </div>
    )
}

export default HoverInfo
