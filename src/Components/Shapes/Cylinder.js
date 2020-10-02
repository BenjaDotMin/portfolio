import React from 'react';
import "./Cylinder.scss";

function Cylinder({ clickable, extra }) {
    return (
        <div className={`ortho__cylinder ${clickable ? "--clickable" : ""}`}>
            <div className="ortho__shadow">
                {extra ? (<div className="ortho__shadowInner">
                    <div className="ortho__shadowInner"></div>
                </div>) : ""}
            </div>

            <div className="ortho__cover">
                <div className="ortho__sides"></div>
            </div>
        </div>
    )
}

export default Cylinder
