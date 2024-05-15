import React from "react";
import HeroImg from "../assets/Medify_assests/hero_image.png";
import "./HeroSection.css";
import Button from "../Button/Button";
import SearchComponent from "../SearchComponent/SearchComponent";


export default function HeroSection(){
    return(
        <div className="Hero">
            <div className="HeroBody">
                <div className="heroTexts">
                    <h4>Skip the travel! Find Online</h4>
                    <h1>Medical <span>Centers</span></h1>
                    <p>Connect instantly with a 24x7 specialist or chose to video visit a particular doctor.</p>
                    <Button text="Find centers" buttonClass="largeButton "/>
                </div>
                <div className="heroImgdiv">
                    <img className="heroImage" src={HeroImg} alt="heroImage"/>
                </div>
            </div>
            <SearchComponent />
        </div>
    );

}