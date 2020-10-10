import React, { useEffect } from 'react';
import Block from "../../Shapes/Block";
import Cylinder from '../../Shapes/Cylinder';
//import gsap from "gsap";
import "./Graph.scss";


function Graph() {

    // useEffect(() => {
    //     const graph = gsap.timeline();
    //     const graphBars = document.querySelectorAll(".bar");

    //     graphBars.forEach(bar => {
    //         graph.from(bar, { height: 0, duration: .6 }, "-=0.3")
    //     })
    // }, [])

    return (
        <div className="graph __3d">
            <Block />
            <Block className="bar bar__one" />
            <Block className="bar bar__two" />
            <Block className="bar bar__three" />
            <Block className="bar bar__four" />
            <Block className="bar bar__five" />
            <Cylinder />
        </div>
    )
}

export default Graph
