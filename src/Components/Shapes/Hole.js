import React from 'react';
import "./Hole.scss";

function Hole({ className, rounded }) {
    return (
        <div className={`ortho__hole shape ${rounded ? "--rounded" : ""}  ${className ? className : ""}`}>
            <div className="ortho__inner">
                <div className="ortho__innerSides"></div>
            </div>
            <div className="ortho__sides"></div>
            <div className="ortho__back"></div>
        </div>
    )
}

export default Hole
