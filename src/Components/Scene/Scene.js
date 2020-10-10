import React from 'react';
import Block from "../Shapes/Block";
import Hole from "../Shapes/Hole";
import Cylinder from "../Shapes/Cylinder";
import Cloud from "../Shapes/Cloud";
import Image from "../Shapes/Image";
import Heart from "../Shapes/Heart";
import Sphere from "../Shapes/Sphere";
import Laptop from '../Groups/Laptop/Laptop';
import Window from '../Groups/Window/Window';
import Font from '../Groups/Font/Font';
import Graph from '../Groups/Graph/Graph';
import Phone from '../Groups/Phone/Phone';
import Mag_Glass from '../Groups/Mag_Glass/Mag_Glass';
import Message from '../Groups/Message/Message';
import Padlock from '../Groups/Padlock/Padlock';
import Share from '../Groups/Share/Share';
import BlockShape from '../Shapes/BlockShape';
import "./Scene.scss";

function Scene() {
    return (
        <div className="scene parent __3d">
            <Laptop />
            <Block className="floor" />
            <Block className="rounded__block" rounded />
            <Window className="main__window" />
            <Block className="floor__front" />
            <Block className="floor__left" />
            <Block className="floor__right" />
            <Font />
            <Graph />
            <Mag_Glass />
            <Message />
            <Padlock />
            <Share />
            <Hole className="donut" rounded />
            <Hole className="large__hole" />
            <Cylinder className="cylinder" />
            <Sphere />
            <Cloud amount={10} />
            <BlockShape className="cross" cross />
            <BlockShape className="tick" tick />
            <Image className="image" />
            <Heart className="heart" amount={17} />
            <Phone />
        </div>
    )
}

export default Scene
