import React from 'react';
import "./Cloud.scss";

function Cloud({ speed }) {
    return (
        <div className={`ortho__cloudGroup floating__cloud  ${speed ? speed : ""}`}>
            {Array.from({ length: 7 }, () =>
                <div className="ortho__cloud"><span className="ortho__cloudSides"></span></div>
            )}
        </div>
    )
}

export default Cloud
