import React from 'react';
import Cylinder from "../../Shapes/Cylinder";
import Block from "../../Shapes/Block";
import Hole from "../../Shapes/Hole";
import "./Phone.scss";

function Phone() {
    return (
        <div className="phone __3d">
            <Cylinder className="phone__button" />
            <Block className="phone__top" rounded />
            <Hole className="phone__frame" rounded />
        </div>
    )
}

export default Phone
