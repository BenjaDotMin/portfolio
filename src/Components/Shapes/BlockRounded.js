import React from 'react';
import "./BlockRounded.scss";

function BlockRounded() {
    return (
        <div className={`ortho__blockRounded shape`}>
            <div className="ortho__inner"></div>
            <div className="ortho__sides"></div>
        </div>
    )
}

export default BlockRounded
