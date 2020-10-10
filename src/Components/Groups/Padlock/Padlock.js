import React from 'react';
import Block from "../../Shapes/Block";
import Hole from "../../Shapes/Hole";
import Cylinder from "../../Shapes/Cylinder";
import "./Padlock.scss";

function Padlock() {
    return (
        <div className="padlock __3d">
            <Block rounded />
            <Hole rounded />
            <Hole rounded className="keyhole" />
            <Cylinder />
        </div>
    )
}

export default Padlock
