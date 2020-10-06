import React, { useState } from 'react';
import "./Text.scss";

function Text({ clickable, text, amount = 5, clickdepth = 2 }) {
    const [mouseDown, setMouseDown] = useState(false);
    const move = amount / clickdepth;

    return (
        <p onMouseDown={() => setMouseDown(b => !b)} onMouseUp={() => setMouseDown(b => !b)} onMouseLeave={() => setMouseDown(false)} className={`ortho__text shape ${clickable ? "--clickable" : ""}`}>
            {/* make an array with length of amount number */}
            {Array.from({ length: amount }, (e, i) => (
                //load svg elements with either a state change event, or not
                i === 0 ? (<span key={i} style={{ transform: mouseDown && clickable ? `translateZ(-${move / 10 - 0.2}vmin)` : "" }}>{text}</span>) :
                    i < move ? (<span key={i} style={{ transform: mouseDown && clickable ? `translateZ(-${move / 10 - 0.1}vmin)` : "" }}>{text}</span>) :
                        (<span key={i}>{text}</span>)
            ))}
        </p>
    )
}

export default Text
