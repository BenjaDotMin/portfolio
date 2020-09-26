import React from 'react';
import "./Cylinder.scss";
import Shape from './Shape';

function Cylinder({ parent, clickable, flat }) {
    return (
        <div className={`ortho__cylinder _3d ${parent ? "--parent" : ""} ${clickable ? "--clickable" : ""} ${flat ? "--flat" : ""} `}>
            <div className="ortho__shadow"></div>

            {flat ? (
                <><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div><div className="ortho__shadow"></div></>
            ) : ""}

            {parent ? (
                <Shape tick child />
            ) : ""}
        </div>
    )
}

export default Cylinder
