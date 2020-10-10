import React from 'react';
import "./Sphere.scss";


function Sphere({ className }) {
    return (
        <div className={`ortho__sphere __3d ${className ? className : ""} ${className ? className : ""}`}></div>
    )
}

export default Sphere
