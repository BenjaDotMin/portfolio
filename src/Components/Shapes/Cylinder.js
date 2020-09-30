import React from 'react';
import "./Cylinder.scss";

function Cylinder({ clickable, long }) {
    return (
        <div className={`ortho__cylinder ${clickable ? "--clickable" : ""} ${long ? "--long" : ""} `}>
            <div className="ortho__shadow"></div>

            {long ? (
                <>{Array.from({ length: 6 }, () =>
                    <div className="ortho__shadow"></div>
                )}</>
            ) : ""}
        </div>
    )
}

export default Cylinder
