import React, { useState } from 'react';

function Heart({ clickable, amount = 5, clickdepth = 2 }) {
    const [active, setActive] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const move = amount / clickdepth;

    return (
        <div onMouseDown={() => setMouseDown(b => !b)} onMouseUp={() => { setMouseDown(b => !b); setActive(b => !b); }} onMouseLeave={() => setMouseDown(false)} className={`ortho__heart shape ${clickable ? "--clickable" : ""} ${active ? "--active" : ""}`} >
            {/* make an array with length of amount number */}
            {Array.from({ length: amount }, (e, i) => (
                //load svg elements with either a state change event, or not
                i === 0 ? (<svg key={i} style={{ transform: mouseDown ? `translateZ(-${move / 10 - 0.2}vmin)` : "" }} viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>) :
                    i < move ? (<svg key={i} style={{ transform: mouseDown ? `translateZ(-${move / 10 - 0.1}vmin)` : "" }} viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>) :
                        (<svg key={i} viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>)
            ))}
        </div>
    )
}

export default Heart
