import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import Specialisation from "../Specialisation/Specialisation";  

export default function HomePage(){
    return(
        <div>
            <NavBar atHomePage={true}/>
            <HeroSection />
            <SwiperComponent type="offers"/>
            <Specialisation />
            {/* <SwiperComponent type="persons"/> */}
        </div>
        
    );
}