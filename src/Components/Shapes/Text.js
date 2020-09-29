import React from 'react';
import "./Text.scss";

function Text() {
    return (
        <h3 className="ortho__text">

            {Array.from({ length: 7 }, () =>
                <div className="ortho__shadow"></div>
            )}
        </h3>
    )
}

export default Text
