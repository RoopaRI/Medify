import React from "react";
import "./Footer.css"
import facebookImg from "../assets/Medify_assests/Footer/a.elementor-icon.png";
import twitterImg from "../assets/Medify_assests/Footer/a.elementor-icon-1.png";
import youtubeImg from "../assets/Medify_assests/Footer/a.elementor-icon-2.png";
import pinterestImg from "../assets/Medify_assests/Footer/a.elementor-icon-3.png";
import rightArrowImg from "../assets/Medify_assests/Footer/.png";
import Logo from '../Logo/Logo';

const copyrightText = "Copyright ©2023 Surya Nursing Home.com. All Rights Reserved";

export default function Footer() {
    const links = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
    const Icon = ({icon}) => <img src={icon} alt={`${icon} icon`} className='footerIcon' />

    const displayLinks = () => {
        return links.map(item => {
            return (
                <a className='footerLink' href='#'>
                    <img src={rightArrowImg} alt='right arrow'/>
                    <span>{item}</span>
                </a>
            )
        })
    }
    return (
        <div className='MainFooter'>
            <div className='mainFooterBody'>
                <div className='footerIconsAndLogo'>
                    <Logo />
                    <div className='footerIconWrapper'>
                        <Icon icon={facebookImg} />
                        <Icon icon={twitterImg} />
                        <Icon icon={youtubeImg} />
                        <Icon icon={pinterestImg} />
                    </div>
                </div>
                <div className='footerLinkWrapper'>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                </div>
            </div>
            <div className='copyright'>
                {copyrightText}
            </div>
        </div>
    );
};
