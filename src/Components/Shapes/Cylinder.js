import React from 'react';
import "./Cylinder.scss";

function Cylinder({ clickable, flat }) {
    return (
        <div className={`ortho__cylinder ${clickable ? "--clickable" : ""} ${flat ? "--flat" : ""} `}>
            <div className="ortho__shadow"></div>

            {flat ? (
                <><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div></>
            ) : ""}
        </div>
    )
}

export default Cylinder
