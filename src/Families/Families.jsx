import React from "react";
import "./Families.css";
import familyHeartIcon from "../assets/Medify_assests/Families/span.elementor-icon.png";
import familyHospitalIcon from "../assets/Medify_assests/Families/span.elementor-icon-1.png";
import familyMedicalIcon from "../assets/Medify_assests/Families/span.elementor-icon-2.png";
import familyDoctorIcon from "../assets/Medify_assests/Families/span.elementor-icon-3.png";
import FamilyCard from "../FamilyCard/FamilyCard";

const superText = "CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.";
const header = "Our Families";
const subText = "We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.";


export default function Families(){
    
    return (
        <div className='Families'>
            <div className='commonContainer FamiliesBody'>
                <div className='familiesTexts'>
                    <p>{superText}</p>
                    <h3>{header}</h3>
                    <div className="CommonSubText">{subText}</div>
                </div>
                <div className='familesCardsWrapper'>
                    <div className='familyCardLeft familyCardHalf'>
                        <FamilyCard icon={familyHeartIcon} cardNo={"5000+"} text={"Happy Patients"} />
                        <FamilyCard icon={familyHospitalIcon} cardNo={"200+"} text={"Hospitals"} />
                    </div>
                    <div className='familyCardRight familyCardHalf'>
                        <FamilyCard icon={familyMedicalIcon} cardNo={"1000+"} text={"Laboratories"} />
                        <FamilyCard icon={familyDoctorIcon} cardNo={"700+"} text={"Expert Doctors"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
