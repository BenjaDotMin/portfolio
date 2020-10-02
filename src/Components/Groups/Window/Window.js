import React from 'react';
import Hole from "../../Shapes/Hole";
import Block from "../../Shapes/Block";
import Cylinder from "../../Shapes/Cylinder";
import "./Window.scss";

function Window() {
    return (
        <div className="window">
            {/* <Hole />
            <Block /> */}
            <Cylinder extra />
            {/* <Cylinder />
            <Cylinder />
            <Block />
            <Block />
            <Block />
            <Block /> */}
        </div>
    )
}

export default Window
