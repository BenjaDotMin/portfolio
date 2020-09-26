import React from 'react';
import "./Hole.scss";

function Hole({ donut, diamond, flat, rounded }) {
    return (
        <div className={`ortho__hole _3d ${donut ? "--donut" : ""} ${diamond ? "--diamond" : ""} ${flat ? "--flat" : ""} ${rounded ? "--rounded" : ""}`}>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
            <div className="ortho__shadow"></div>
        </div>
    )
}

export default Hole
