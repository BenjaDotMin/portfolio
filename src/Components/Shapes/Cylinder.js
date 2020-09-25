import React from 'react';
import "./Cylinder.scss";
import Plus from './Plus';

function Cylinder({ parent, clickable }) {
    return (
        <div className={`ortho__cylinder _3d ${parent ? "--parent" : ""} ${clickable ? "--clickable" : ""} `}>
            <div className="ortho__shadow"></div>

            {parent ? (
                <Plus child />
            ) : ""}
        </div>
    )
}

export default Cylinder
