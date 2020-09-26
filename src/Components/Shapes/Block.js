import React from 'react';
import Image from "./Image";
import "./Block.scss";

function Block({ parent, rounded }) {
    return (
        <div className={`ortho__block _3d ${parent ? "--parent" : ""} ${rounded ? "--rounded" : ""}`}>
            <div className={`ortho__sides ${rounded ? "back" : ""}`}></div>

            {parent ? (
                <Image child />
            ) : ""}

        </div>
    )
}

export default Block
