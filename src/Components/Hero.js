import React from 'react';
import "./Hero.scss";
import Font from "./Groups/Font/Font";
function Hero() {

    return (
        <div className="hero">
            <div className="hero__text">
                <h1>Build The Things!</h1>
                <h3>Front End Developer</h3>
            </div>

            <div className="ortho">
                <Font />
                {/* stuff slowly floats? */}
                {/* rolling balls around content, behind and infront? - if hero slides right */}
                {/* cup, calender */}
                {/* html, js, angular, vue, react, open close brackets logos */}
                {/* clouds floating past slowly different sizes/speeds */}
                {/* some whte square to make up floor(see insp) */}
                {/* knocker thing animation */}
                {/* loading bar */}
                {/* rounded button with text that animates when clicked? links to sections? */}
                {/* file */}
                {/* chat bubble with img */}
                {/* pie chart */}
                {/* graph */}
                {/* name could be in a account tag (see insp) */}
                {/* padlock */}
                {/* typing message icon (animated?) */}
                {/* share icon */}
                {/* drag to rotate the translates? */}
            </div>
        </div>
    )
}

export default Hero
