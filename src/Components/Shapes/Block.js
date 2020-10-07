import React from 'react';
import "./Block.scss";

function Block({ clickable }) {
    return (
        <div className={`ortho__block shape ${clickable ? "--clickable" : ""}`}>
            <div className={`ortho__sides`}>
                <div className="ortho__topBottom"></div>
            </div>
            <div className="ortho__cover">
                <div className="ortho__coverSides"></div>
            </div>
        </div>
    )
}

export default Block
