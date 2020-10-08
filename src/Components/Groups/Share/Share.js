import React from 'react';
import Cylinder from "../../Shapes/Cylinder";
import Block from "../../Shapes/Block";
import "./Share.scss";

function Share() {
    return (
        <div className="share parent">
            <Cylinder />
            <Cylinder />
            <Cylinder />
            <Block />
            <Block />
        </div>
    )
}

export default Share
