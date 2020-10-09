import React, { useEffect, useState, useRef } from 'react';
import Cylinder from "../../Shapes/Cylinder";
import Block from "../../Shapes/Block";
import gsap from "gsap";
import "./Laptop.scss";

function Laptop() {

    const laptopTop = useRef(null)
    const [laptopOpen, setLaptopOpen] = useState(false);

    const openLaptop = () => (
        gsap.fromTo(".laptop__top", { rotateX: -180 }, { duration: 1.5, rotateX: -70, ease: "sine.inOut" })
    )

    useEffect(() => {

    }, [laptopTop, gsap])
    return (
        <div className="laptop parent" onClick={openLaptop}>
            <Block className="laptop__top" ref={laptopTop} />
            <Block className="laptop__bottom" />
            <Cylinder clickable className="laptop__button" />
        </div>
    )
}

export default Laptop
