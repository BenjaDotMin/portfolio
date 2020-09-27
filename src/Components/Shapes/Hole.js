import React from 'react';
import "./Hole.scss";

function Hole({ equal }) {
    return (
        <div className={`ortho__hole ${equal ? "--equal" : ""}`}>
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
