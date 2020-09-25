import React from 'react';
import "./Cylinder.scss";
import Plus from './Plus';

function Cylinder({ parent }) {
    return (
        <div className={`ortho__cylinder _3d ${parent ? "--parent" : ""}`}>
            <div className="ortho__shadow"></div>

            {parent ? (
                <Plus child />
            ) : ""}
        </div>
    )
}

export default Cylinder
