import React from 'react';
import Cylinder from '../../Shapes/Cylinder';
import Hole from "../../Shapes/Hole";
import Block from "../../Shapes/Block";
import BlockShape from "../../Shapes/BlockShape";
import Image from "../../Shapes/Image";
import Text from "../../Shapes/Text";
import Cloud from "../../Shapes/Cloud";
import MessageIcon from '../../Shapes/MessageIcon';
import Sphere from '../../Shapes/Sphere';
import Heart from '../../Shapes/Heart';
import "./Demo.scss";

function Demo() {
    return (
        <div className="demo parent">
            <Hole />
            <Hole rounded />
            <Cylinder detail clickable />
            <Block />
            <BlockShape cross />
            <BlockShape tick />
            <Image clickable amount={10} />
            <MessageIcon amount={20} clickable />
            <Text clickable text="DAY 1" amount={10} />
            <Heart amount={60} clickable />
            <Cloud amount={20} />
            <Sphere />
        </div>
    )
}

export default Demo
