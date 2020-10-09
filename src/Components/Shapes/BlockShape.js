import React from 'react';
import "./BlockShape.scss";

function Shape({ className, cross, tick }) {
    return (
        <div className={`ortho__block shape ${className ? className : ""} ${cross ? "--cross" : ""} ${tick ? "--tick" : ""}`}>
            <div className="ortho__sides">
                <div className="ortho__topBottom"></div>
            </div>
            <div className="ortho__block shape">
                <div className="ortho__sides">
                    <div className="ortho__topBottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Shape
