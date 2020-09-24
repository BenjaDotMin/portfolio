import React from 'react';
import Image from "./Image";
import "./Block.scss";

function Block({ child }) {
    return (
        <div className="ortho__block">
            <div className="ortho__sides"></div>

            {child ? (
                <Image />
            ) : ""}

        </div>
    )
}

export default Block
