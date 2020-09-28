import React, { useEffect, useState, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Dots from "../img/dots.svg";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "./SideProjects.scss";

SwiperCore.use([Navigation]);


function SideProjects() {

    const [projects] = useState([
        { name: "Meraki Travel", img: "https://source.unsplash.com/WLUHO9A_xik/900x480", link: "https://www.merakitravel.co.uk/" },
        { name: "88 Destinations", img: "https://source.unsplash.com/WLUHO9A_xik/900x480", link: "https://www.88destinations.com/" },
        { name: "VIP Ski", img: "https://source.unsplash.com/WLUHO9A_xik/900x480", link: "https://www.vip-chalets.com/" }
    ]);

    const sideTitle = useRef(null);
    const nextButton = useRef(null);
    const prevButton = useRef(null);
    const [projectName, setProjectName] = useState(projects[0].name);
    const [firstSlide, setFirstSlide] = useState(true);
    const [lastSlide, setLastSlide] = useState(false);
    const [buttonSrc, setButtonSrc] = useState(projects[0].link)
    const [changeText, setChangeText] = useState(false);
    const [changeTextBack, setChangeTextBack] = useState(false);

    function slideChange(swiper) {
        setTimeout(() => { setProjectName(projects[swiper.activeIndex].name); setButtonSrc(projects[swiper.activeIndex].link); }, 200);
        if (swiper.isBeginning) { setFirstSlide(true); } else { setFirstSlide(false) };
        if (swiper.isEnd) { setLastSlide(true); } else { setLastSlide(false) };
    }

    function nextSlide(swiper) {
        nextButton.current.addEventListener("click", () => {
            if (!swiper.isEnd) {
                swiper.slideNext()
                setChangeText(true);
                sideTitle.current.onanimationend = () => setChangeText(false);
            };
        });
    };

    function prevSlide(swiper) {
        prevButton.current.addEventListener("click", () => {
            if (!swiper.isBeginning) {
                swiper.slidePrev();
                setChangeTextBack(true);
                sideTitle.current.onanimationend = () => setChangeTextBack(false);
            };
        });
    };

    useEffect(() => {

        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
            var evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));
        }
        return () => { }
    }, [firstSlide, lastSlide, changeText, changeTextBack]);

    return (
        <div className="sideprojects">
            <div className="titles circle parallax__3">
                <h2 className="section__title">Side Projects <img className=" parallax__3" src={Dots} alt="circle" /><img className=" parallax__3" src={Dots} alt="circle" /></h2>
                <p className="section__description ">Here are some projects I work on in my free time, for fun!</p>
                <div className="circle parallax__2"></div>
            </div>
            <div className="sideprojects__carousel">

                <div ref={nextButton} className={`sideprojects__arrow circle parallax__2 ${lastSlide ? "disabled" : ""}`}>
                    <ArrowRightAltIcon />
                </div>

                <div ref={prevButton} className={`sideprojects__arrow back circle parallax__2 ${firstSlide ? "disabled" : ""}`}>
                    <ArrowRightAltIcon />
                </div>

                <Swiper navigation
                    onSlideChange={swiper => { slideChange(swiper); }}
                    onSwiper={(swiper) => { nextSlide(swiper); prevSlide(swiper); }}
                    breakpoints={{
                        768: { slidesPerView: 'auto', }, 1280: { slidesPerView: 1 }
                    }}>
                    {projects.map(project => (
                        <SwiperSlide key={project.name} >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.img} alt={project.name} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <h3 className="sideproject__name parallax__2">
                    <span ref={sideTitle} className={`${changeText ? "animate" : ""} ${changeTextBack ? "animateBack" : ""}`}>{projectName}</span>
                    <a className="button sideprojects__link" href={buttonSrc}>Take a look</a>
                </h3>
                <div className="dots">
                    <img src={Dots} alt="dots pattern" />
                    <img src={Dots} alt="dots pattern" />
                </div>
            </div>
        </div>
    )
}

export default SideProjects
