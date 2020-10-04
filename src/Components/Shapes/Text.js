import React, { useState } from 'react';

function Text({ clickable, text, amount = 5, clickdepth = 20 }) {
    const [mouseDown, setMouseDown] = useState(false);
    const half = amount / 2;

    return (
        <p onMouseDown={() => setMouseDown(b => !b)} onMouseUp={() => setMouseDown(b => !b)} className={`ortho__text ${clickable ? "--clickable" : ""}`}>
            {/* make an array with length of amount number */}
            {Array.from({ length: amount }, (e, i) => (
                //load svg elements with either a state change event, or not
                i === 0 ? (<span style={{ transform: mouseDown ? `translateZ(-${amount / clickdepth - 0.1}vmin)` : "" }}>{text}</span>) :
                    i < half ? (<span style={{ transform: mouseDown ? `translateZ(-${amount / clickdepth}vmin)` : "" }}>{text}</span>) :
                        (<span>{text}</span>)
            ))}
        </p>
    )
}

export default Text
