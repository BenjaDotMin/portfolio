import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import Cylinder from "./Cylinder";
import "./MessageIcon.scss";

function MessageIcon({ child, clickable, float }) {

    const messageBox = useRef(null);

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
        // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <div className={`ortho__messageIcon _3d ${child ? "--child" : ""} ${clickable ? "--clickable" : ""} ${float ? "--float" : ""}`} ref={messageBox}>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>
            <svg viewBox="0 0 46 36"><path d="M43.1,27H10L0,36V2.9C0,1.3,1.3,0,2.9,0h40.2C44.7,0,46,1.3,46,2.9v21.2C46,25.7,44.7,27,43.1,27z" /></svg>

            <div className="cylinder__dots">
                <Cylinder child />
                <Cylinder child />
                <Cylinder child />
            </div>
        </div>
    )
}

export default MessageIcon
