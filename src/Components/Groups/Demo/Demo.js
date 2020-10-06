import React from 'react';
import Cylinder from '../../Shapes/Cylinder';
import Hole from "../../Shapes/Hole";
import Block from "../../Shapes/Block";
import BlockRounded from "../../Shapes/BlockRounded";
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
            <BlockRounded />
            <Cylinder detail clickable />
            <Block />
            <BlockShape cross />
            <BlockShape tick />
            <Image amount={20} clickable />
            <MessageIcon amount={20} clickable />
            <Text clickable text="DAY 1" amount={24} />
            <Heart amount={40} clickdepth={1.6} clickable />
            <Cloud amount={20} />
            <Sphere />
        </div>
    )
}

export default Demo
