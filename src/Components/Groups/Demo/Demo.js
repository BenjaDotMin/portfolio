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
import "./Demo.scss";

function Window() {
    return (
        <div className="demo">
            <Hole />
            <Cylinder />
            <Block />

            <BlockShape cross />
            <Image />
            <MessageIcon />
            <Text />
            <Cloud />
            <Sphere />
        </div>
    )
}

export default Window
