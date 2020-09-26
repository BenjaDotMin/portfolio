import React from 'react';
import "./Shape.scss";

function Shape({ cross, plus, tick }) {
    return (
        <div className={`ortho__block _3d ${cross ? "--plus --cross" : ""} ${plus ? "--plus" : ""} ${tick ? "--tick" : ""}`}>
            <div className="ortho__sides"></div>
            <div className="ortho__block _3d">
                <div className="ortho__sides"></div>
            </div>
        </div>
    )
}

export default Shape
