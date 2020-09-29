import React from 'react';
import "./Hole.scss";

function Hole() {
    return (
        <div className={`ortho__hole`}>
            <>{Array.from({ length: 7 }, () =>
                <div className="ortho__shadow"></div>
            )}</>
        </div>
    )
}

export default Hole
