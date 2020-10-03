import React from 'react';
import "./Hole.scss";

function Hole({ rounded }) {
    return (
        <div className={`ortho__hole ${rounded ? "--rounded" : ""}`}>
            <div className="ortho__inner">
                <div className="ortho__innerSides"></div>
            </div>
            <div className="ortho__sides"></div>
        </div>
    )
}

export default Hole
