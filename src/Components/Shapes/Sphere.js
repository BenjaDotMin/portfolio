import React from 'react';
import "./Sphere.scss";


function Sphere({ className }) {
    return (
        <div className={`ortho__sphere shape ${className ? className : ""} ${className ? className : ""}`}></div>
    )
}

export default Sphere
