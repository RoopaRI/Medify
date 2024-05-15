import React from "react";
import "./Specialisation.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import dentistryImage from "../assets/Medify_assests/specialisation/Drugstore.png";
import primaryCareImage from "../assets/Medify_assests/specialisation/Stethoscope.png";
import cardiologyImage from "../assets/Medify_assests/specialisation/Heart Rate.png";
import MRIImage from "../assets/Medify_assests/specialisation/Heart Rate Monitor.png";
import bloodTestImage from "../assets/Medify_assests/specialisation/Blood Sample.png";
import piscologistImage from "../assets/Medify_assests/specialisation/Immune.png";
import laboratoryImage from "../assets/Medify_assests/specialisation/Drugstore-1.png";
import xrayImage from "../assets/Medify_assests/specialisation/X-Ray.png";

export default function Specialisation(){

    const data = [
        {text: "Dentistry", image: dentistryImage},
        {text: "Primary Care", image: primaryCareImage},
        {text: "Cardiology", image: cardiologyImage},
        {text: "MRI Resonance", image: MRIImage},
        {text: "Blood Test", image: bloodTestImage},
        {text: "Piscologist", image: piscologistImage},
        {text: "Laboratory", image: laboratoryImage},
        {text: "X-Ray", image: xrayImage},
    ];

    const displayCards = () => data.map(item => <Card cardClass="specializationCard" image={item.image} text={item.text} /> );

    return(
        <div className='Specialization'>
            <div className='commonContainer SpecializationBody'>
                <h3 className='specializationHeader'>Find by specialisation</h3>
                <div className='specializationCardsBody'>
                    {displayCards()}
                </div>
                <Button buttonClass={"largeButton"} text={"view all"}/>
            </div>
        </div>
    );
}