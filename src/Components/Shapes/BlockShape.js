import React from 'react';
import "./BlockShape.scss";

function Shape({ cross, tick }) {
    return (
        <div className={`ortho__block ${cross ? "--cross" : ""} ${tick ? "--tick" : ""}`}>
            <div className="ortho__sides"></div>
            <div className="ortho__block">
                <div className="ortho__sides"></div>
            </div>
        </div>
    )
}

export default Shape