import React from 'react';
import Hole from "../../Shapes/Hole";
import Block from "../../Shapes/Block";
import Cylinder from "../../Shapes/Cylinder";
import "./Window.scss";

function Window() {
    return (
        <div className="window parent">
            <Hole />
            <Block />
            <Cylinder clickable />
            <Cylinder clickable />
            <Cylinder clickable />
            <Block />
            <Block />
            <Block />
            <Block />
        </div>
    )
}

export default Window
