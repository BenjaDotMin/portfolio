import React, { useEffect, useState, useMemo } from 'react';
import Cylinder from "../../Shapes/Cylinder";
import Block from "../../Shapes/Block";
import gsap from "gsap";
import "./Laptop.scss";

function Laptop() {
    const laptopTop = useMemo(() => gsap.timeline({ paused: true }), []); //create timeline on init
    const [laptopOpen, setLaptopOpen] = useState(false);

    //add to timeline after render, run only once with []
    useEffect(() => {
        laptopTop.to(".laptop__top", { duration: 1.5, rotateX: 290, ease: "sine.inOut" })
    }, []);

    //another, run every time var changes
    useEffect(() => {
        if (laptopOpen) {
            laptopTop.play();

        } else {
            laptopTop.reverse()
        }
    }, [laptopOpen]);

    return (
        <div className="laptop parent" onClick={() => setLaptopOpen(!laptopOpen)}>
            <Block className="laptop__top" />
            <Block className="laptop__bottom" />
            <Cylinder clickable className="laptop__button" />
        </div>
    )
}

export default Laptop
