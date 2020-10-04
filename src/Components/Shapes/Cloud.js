import React from 'react';
import "./Cloud.scss";

function Cloud({ clickable, amount = 5 }) {
    return (
        <div className={`ortho__cloudGroup floating__cloud ${clickable ? "--clickable" : ""}`}>
            {Array.from({ length: amount }, () =>
                <div className="ortho__cloud"><span className="ortho__cloudSides"></span></div>
            )}
        </div>
    )
}

export default Cloud
