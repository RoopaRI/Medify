import React, { useState } from 'react';

import "./NavBar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import menuIcon from "../assets/Medify_assests/hamburger.png";
import {Link} from "react-router-dom";


export default function NavBar(props){
    const { atHomePage, atFindPage, atBookingsPage, backColor } = props;
    
    const [showNavLinks, setShowNavLinks] = useState(false);
    
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];



    const displayLinks = () => {
        return navLinks.map(item => {
            let goto = "#"
            
            return (
                <Link to={goto}>
                    <span className='navLink'><span className='navLink-inner'>{item}</span></span>
                </Link>
            )
        })
    }




    
    return(
        <div className='navBody'>
            <Logo/>
            <div className="nav">
                <img src={menuIcon} alt="Menu" className="menuIcon" onClick={() => setShowNavLinks(!showNavLinks)} />
                <div className={`navLinksDiv ${showNavLinks ? 'show' : ''}`}>{displayLinks()} 
                <a href="/bookings">
                  <Button text="my bookings" buttonClass="largeButton "/>
                </a>
                </div>
            </div>

           
        </div>
        
    );
}