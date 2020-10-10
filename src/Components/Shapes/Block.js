import React from 'react';
import "./Block.scss";

function Block({ className, clickable, rounded }) {
    return (
        <div className={`ortho__block __3d ${className ? className : ""} ${clickable ? "--clickable" : ""} ${rounded ? "--rounded" : ""}`}>
            <div className={`ortho__sides`}>
                <div className="ortho__topBottom"></div>
                {rounded ? (
                    <div className="ortho__sides">
                        <div className="ortho__sides"></div>
                    </div>
                ) : ""}
            </div>
            {clickable ? (
                <div className="ortho__cover">
                    <div className="ortho__coverSides"></div>
                </div>
            ) : ""}
        </div>
    )
}

export default Block
