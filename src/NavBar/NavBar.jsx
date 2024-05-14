import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";


export default function NavBar(){

    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    
    const displayLinks = () => {
        return navLinks.map(item => {
            let goto = "#"
            
            return (
                <a href={goto}>
                    <span className='navLink'><span className='navLink-inner'>{item}</span></span>
                </a>
            )
        })
    }

    return(
        <div className='navBody'>
            <Logo />
            <div className="nav">
                <div className='navLinksDiv'>{displayLinks()}</div>
                    <a href="/bookings">
                        <Button text="my bookings" buttonClass="largeButton "/>
                    </a>
            </div>
                    
        </div>
        
    );
}