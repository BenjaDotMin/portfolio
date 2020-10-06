import React from 'react';
import "./Block.scss";

function Block({ rounded }) {
    return (
        <div className={`ortho__block shape ${rounded ? "--rounded" : ""}`}>
            <div className={`ortho__sides`}></div>
        </div>
    )
}

export default Block
