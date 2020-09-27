import React from 'react';
import BlockShape from "./BlockShape";
import "./Block.scss";

function Block({ parent, rounded }) {
    return (
        <div className={`ortho__block ${rounded ? "--rounded" : ""}`}>
            <div className={`ortho__sides`}></div>

            {parent ? (
                <BlockShape tick />
            ) : ""}

        </div>
    )
}

export default Block
