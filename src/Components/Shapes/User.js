import React, { useState } from 'react';

function User({ clickable, amount = 5, clickdepth = 2 }) {
    const [active, setActive] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const move = amount / clickdepth;

    return (
        <div onMouseDown={() => setMouseDown(b => !b)} onMouseUp={() => { setMouseDown(b => !b); setActive(b => !b); }} onMouseLeave={() => setMouseDown(false)} className={`ortho__user shape ${clickable ? "--clickable" : ""} ${active ? "--active" : ""}`} >
            {/* make an array with length of amount number */}
            {Array.from({ length: amount }, (e, i) => (
                //load svg elements with either a state change event, or not
                i === 0 ? (<svg key={i} style={{ transform: mouseDown && clickable ? `translateZ(-${move / 10 - 0.2}vmin)` : "" }} viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>) :
                    i < move ? (<svg key={i} style={{ transform: mouseDown && clickable ? `translateZ(-${move / 10 - 0.1}vmin)` : "" }} viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>) :
                        (<svg key={i} viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>)
            ))}
        </div>
    )
}

export default User
