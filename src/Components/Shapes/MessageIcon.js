import React, { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import Cylinder from "./Cylinder";
import "./MessageIcon.scss";

function MessageIcon({ clickable, float, amount = 5, clickdepth = 20 }) {

    const messageBox = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);
    const half = amount / 2;

    useEffect(() => {
        const messageDots = document.querySelectorAll(".ortho__messageIcon .ortho__cylinder");
        const dotsTimeline = gsap.timeline({ repeat: 3, paused: true, onComplete: function () { dotsTimeline.restart(); dotsTimeline.pause(); } });
        messageDots.forEach(messageDot => {
            dotsTimeline.from(messageDot, { duration: 0.3, scale: 0, y: 20, ease: "sine.inOut" })
        });
        messageBox.current.addEventListener("click", function () {
            dotsTimeline.play();
        });
        return () => { }
    }, [])

    return (
        <div onMouseDown={() => setMouseDown(b => !b)} onMouseUp={() => setMouseDown(b => !b)} className={`ortho__messageIcon shape ${clickable ? "--clickable" : ""} ${float ? "--float" : ""}`} ref={messageBox}>
            {Array.from({ length: amount }, (e, i) =>
                //load svg elements with either a state change event, or not
                i === 0 ? (<svg style={{ transform: mouseDown ? `translateZ(-${amount / clickdepth - 0.1}vmin)` : "" }} viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>) :
                    i < half ? (<svg style={{ transform: mouseDown ? `translateZ(-${amount / clickdepth}vmin)` : "" }} viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>) :
                        (<svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>)
            )}
            <div style={{ transform: mouseDown ? `translateZ(-${amount / clickdepth - 0.1}vmin)` : "" }} className="cylinder__dots">
                <Cylinder />
                <Cylinder />
                <Cylinder />
            </div>
        </div>
    )
}

export default MessageIcon



