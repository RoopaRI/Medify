import React from "react";
import "./SearchComponent.css";
import doctorImage from "../assets/Medify_assests/communities/Doctor.png";
import laboratory from "../assets/Medify_assests/communities/Capsule.png";
import hospitalImage from "../assets/Medify_assests/communities/Hospital.png";
import medicalStore from "../assets/Medify_assests/communities/Drugstore.png";
import ambulance from "../assets/Medify_assests/communities/Ambulance.png";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function SearchComponent(){

    const cardsImages = [
        {image: doctorImage, text:"doctors"},
        {image: laboratory, text:"labs"},
        {image: hospitalImage, text:"hospitals", customStyle: "cardSelected"},
        {image: medicalStore, text:"medical store"},
        {image: ambulance, text:"ambulance"},
    ]

    const displayCards = () => cardsImages.map(item => <Card customStyle={item.customStyle} image={item.image} text={item.text} /> )

    return(
        <div className='SearchComp'>
            <div className='commonContainer SearchCompBody'>
                {/* <Link to="/find">
                    <SearchBar atHomePage={true}/>
                </Link> */}
                <div className='cardsDivWrapper'>
                    <p>You may be looking for</p>
                    <div className='cardsDiv'>
                        {displayCards()}
                    </div>
                </div>
            </div>
        </div>
    );
}