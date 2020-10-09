import React from 'react';
import "./Cloud.scss";

function Cloud({ className, clickable, amount = 5 }) {
    return (
        <div className={`ortho__cloudGroup shape floating__cloud ${className ? className : ""} ${clickable ? "--clickable" : ""}`}>
            {Array.from({ length: amount }, (e, i) =>
                <div key={i} className="ortho__cloud"><span className="ortho__cloudSides"></span></div>
            )}
        </div>
    )
}

export default Cloud
