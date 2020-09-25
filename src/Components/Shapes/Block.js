import React from 'react';
import Image from "./Image";
import "./Block.scss";

function Block({ parent }) {
    return (
        <div className={`ortho__block _3d ${parent ? "--parent" : ""}`}>
            <div className="ortho__sides"></div>

            {parent ? (
                <Image child />
            ) : ""}

        </div>
    )
}

export default Block
