import React, { useEffect, useRef } from 'react';
//import gsap from "gsap";
//import LocomotiveScroll from 'locomotive-scroll';
//import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Hero from './Components/Hero';
import About from './Components/About';
//import "locomotive-scroll/dist/locomotive-scroll.min.css";

//gsap.registerPlugin(ScrollTrigger);

function App() {

  const app = useRef(null);

  useEffect(() => {
    //setup smooth scroll with gsap's ScrollTriggers
    // const locoScroll = new LocomotiveScroll({
    //   el: app.current,
    //   smooth: true,
    //   //multiplier: 0.5 //control scroll amount
    //   //firefoxMultiplier: 0.5
    // });
    // locoScroll.on("scroll", ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy(app.current, {
    //   scrollTop(value) {
    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //   },
    //   pinType: app.current.style.transform ? "transform" : "fixed"
    // });
    // ////////////////////////////////////////////////

    // //now use gsap
    // gsap.from(".projects", {
    //   autoAlpha: 0,
    //   delay: 0.4,
    //   y: 30,
    //   ease: "sine.inOut",
    //   scrollTrigger: {
    //     scroller: ".app",
    //     trigger: document.querySelector(".projects"),
    //     //toggleActions: "restart none reverse none",
    //     //scrub: true,
    //     start: "top 80%"
    //     //end: "top 0%", //top of element is 0% from top of container
    //     //end: "+=300", //be 300 down from start
    //   }
    // });

    // gsap.to(".about", {
    //   maxWidth: "100vw",
    //   //y: -350,
    //   ease: "sine.inOut",
    //   scrollTrigger: {
    //     scroller: ".app",
    //     trigger: document.querySelector(".about"),
    //     //toggleActions: "restart none reverse none",
    //     //scrub: true,
    //     //end: "top 0%", //top of element is 0% from top of container
    //     //end: "+=300", //be 300 down from start
    //   }
    // });

    // var parallax1 = document.querySelectorAll(".parallax__1");
    // parallax1.forEach(item => {
    //   gsap.from(item, {
    //     y: 120,
    //     ease: "sine.inOut",
    //     scrollTrigger: {
    //       scroller: ".app",
    //       trigger: item,
    //       scrub: true
    //     }
    //   });
    // });

    // var parallax2 = document.querySelectorAll(".parallax__2");
    // parallax2.forEach(item => {
    //   gsap.from(item, {
    //     y: 100,
    //     ease: "sine.inOut",
    //     scrollTrigger: {
    //       scroller: ".app",
    //       trigger: item,
    //       scrub: true,
    //       //end: "top 40%", //top of element is 0% from top of container
    //       //markers: true
    //     }
    //   });
    // });

    // var parallax3 = document.querySelectorAll(".parallax__3");
    // parallax3.forEach(item => {
    //   gsap.from(item, {
    //     y: 50,
    //     ease: "sine.inOut",
    //     scrollTrigger: {
    //       scroller: ".app",
    //       trigger: item,
    //       scrub: true
    //     }
    //   });
    // });

    // var parallax4 = document.querySelectorAll(".parallax__4");
    // parallax4.forEach(item => {
    //   gsap.from(item, {
    //     y: 80,
    //     ease: "sine.inOut",
    //     scrollTrigger: {
    //       scroller: ".app",
    //       trigger: item,
    //       scrub: true,
    //       //markers: true,
    //       //end: "top 40%", //top of element is 0% from top of container
    //     }
    //   });
    // });

    // const donut = document.querySelectorAll(".spin");
    // donut.forEach(item => {
    //   gsap.from(item, {
    //     //y: 50,
    //     ease: "sine.inOut",
    //     rotate: -120,
    //     scrollTrigger: {
    //       scroller: ".app",
    //       trigger: item,
    //       scrub: true
    //     }
    //   });
    // });

    // const floats = document.querySelectorAll(".--float");
    // floats.forEach(float => {
    //   gsap.to(float, {
    //     duration: 3,
    //     y: "-=10px",
    //     yoyo: true,
    //     repeat: -1,
    //     ease: "sine.inOut",
    //   });
    // })

    // const sphere = document.querySelector(".ortho__sphere");
    // gsap.from(sphere, {
    //   duration: 10,
    //   z: 1600,
    //   ease: "sine.out",
    // });

    return () => { }
  }, []);



  return (
    <div className="app" ref={app}>
      <Hero />
      <About />
    </div>
  );
}

export default App;
