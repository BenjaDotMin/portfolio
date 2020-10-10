import React from 'react';
import Block from "../../Shapes/Block";
import Hole from "../../Shapes/Hole";

import "./Mag_Glass.scss";

function Mag_Glass() {
    return (
        <div className="mag_glass __3d">
            <Block rounded />
            <Block rounded />
            <Hole rounded />
        </div>
    )
}

export default Mag_Glass
