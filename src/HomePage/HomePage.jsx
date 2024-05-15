import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import Specialisation from "../Specialisation/Specialisation";
import PatientCaring from "../PatientCaring/PatientCaring";  

export default function HomePage(){
    return(
        <div>
            <NavBar atHomePage={true}/>
            <HeroSection />
            <SwiperComponent type="offers" classForMargin={"CardHolder-offers"}/>
            <Specialisation />
            <SwiperComponent type="persons" classForMargin={"CardHolder-persons"}/>
            <PatientCaring/>
        </div>
        
    );
}