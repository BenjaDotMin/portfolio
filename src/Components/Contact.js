import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Dots from "../img/dots.svg";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact section">
            <div className="titles">
                <h2 className="section__title parallax__2">Contact me <img className=" parallax__3" src={Dots} alt="circle" /><img className=" parallax__3" src={Dots} alt="circle" /></h2>
                {/* <div className="square parallax__2"></div> */}
            </div>

            <div className="contact__wrapper">
                <div className="contact__info parallax__2">
                    <h3>Let's chat on socials.</h3>
                    <ul>
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedInIcon /></li>
                        <li><TwitterIcon /></li>
                    </ul>
                </div>
                <form className="contact__details parallax__2">
                    <h3>Drop me an email.</h3>
                    <p>Outline your idea, and lets see where we can go.</p>
                    <input type="text" placeholder="First name" />
                    <input type="email" placeholder="Email address" />
                    <textarea placeholder="Any extra information"></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="circle parallax__1"></div>
                <div className="dots__group">
                    <img src={Dots} alt="circle" />
                    <img src={Dots} alt="circle" />
                </div>
                <div className="dots__group column">
                    <img src={Dots} alt="circle" />
                    <img src={Dots} alt="circle" />
                </div>

                <div className="triangle parallax__1"></div>

            </div>

        </div>
    )
}

export default Contact
