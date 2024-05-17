import React, { useState } from 'react';

import "./NavBar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import menuIcon from "../assets/Medify_assests/hamburger.png";
import {Link} from "react-router-dom";


export default function NavBar(props){
    const { atHomePage, atFindPage, atBookingsPage, backColor } = props;
    
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [menuPoisition, setMenuPosition] = useState("hideMenu");
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];



    const displayLinks = () => {
        return navLinks.map(item => {
            let goto = "#"
            if(item === "Find Doctors") goto = "/find"
            return (
                <Link to={goto}>
                    <span className='navLink'><span className='navLink-inner'>{item}</span></span>
                </Link>
            )
        })
    }

    const handleMenuClick = () => {
        if(menuPoisition === "menuLeft" || menuPoisition === "hideMenu") setMenuPosition("menuRight");
        else setMenuPosition("menuLeft");
    }

    const displayMenuList = () => {
        let arr = [], delay = 0, transitionDelay;
        // ...navLinks, 
        navLinks.forEach((item, index) => {
            transitionDelay = {transitionDelay: `${delay++}00ms`} 
            let goto = "#";
            if(item == "Find Doctors") goto = "/find";
            return arr.push(
                <Link onClick={handleMenuClick} to={goto} style={transitionDelay} className={`menuItem ${menuPoisition}`}>
                    {item}
                </Link>
            )
        });
        arr.push(<Link to="/bookings" style={transitionDelay} className={`menuItem ${menuPoisition} menuItem-forBookings`}><Button text="my bookings" buttonClass="largeButton "/></Link>);

        return arr;
    } 

    const NavSearch = () => {
        if(atFindPage) return (
            <div className={"NavSearch"}>
                
            </div>
        )
    }

    const NavbarBottom = () => {
        if(atHomePage) return null;

        return (
            <div className='navbarBottom'>
                <span className='navbarBottomPatch'></span>
            </div>
        )
    }

    return(
        <>
        <nav className={`${backColor}`}>
            <div className="commonContainer">
            <div className='mainNav'>
                <Link to="/">
                    <div className="logo">
                        <Logo/>
                    </div>
                </Link>
                <div className='navMenuButton'>
                    <Button clickFuntion={handleMenuClick} buttonClass='whiteButton inheritBackground' icon={menuIcon} />
                </div>
                <div className='navBody'>
                    <div className='navLinksDiv'>{displayLinks()}</div>
                    <Link to="/bookings">
                        <Button text="my bookings" buttonClass="largeButton "/>
                    </Link>
                </div>
            </div>
            
            <div className='menuListWrapper'>
                {displayMenuList()}
            </div>
            </div>
            <NavSearch />
        </nav>
        <NavbarBottom />
        </>
        
    );
}