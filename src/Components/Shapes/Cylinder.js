import React from 'react';
import "./Cylinder.scss";

function Cylinder({ clickable, detail }) {
    return (
        <div className={`ortho__cylinder shape ${clickable ? "--clickable" : ""}`}>

            <div className="ortho__shadow">
                {detail ? (<>
                    <div className="ortho__shadowInner">
                        <div className="ortho__shadowInner"></div>
                        <div className="ortho__shadowInner"></div>
                        <div className="ortho__shadowInner"></div>
                        <div className="ortho__shadowInner"></div>
                    </div>
                </>) : ""}
            </div>

            {clickable ? (
                <div className="ortho__cover">
                    <div className="ortho__sides"></div>
                </div>
            ) : ""}
        </div>
    )
}

export default Cylinder
