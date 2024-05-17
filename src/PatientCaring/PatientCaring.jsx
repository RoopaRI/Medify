import React from 'react';
import "./PatientCaring.css";
import blueTick from "../assets/Medify_assests/patientCaring/blueTick.png";
import phoneIcon from "../assets/Medify_assests/patientCaring/svg.h2d-acf562d2.png";
import Button from '../Button/Button';

const superText = "HELPING PATIENTS FROM AROUND THE GLOBE!!";
const subText = "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.";
const note1 = "Stay Updated About Your Health"
const note2 = "Check Your Results Online"
const note3 = "Manage Your Appointments"
export default function PatientCaring () {
    return (
        <div className='PatientCaring'>
            <div className='commonContainer PatientCaringBody'>
                <div className='patientImgDiv patientCaringImgDiv'>
                    <div className='pateintCareImage pateintCareImage1'></div>
                    <div className='pateintCareImage pateintCareImage2'></div>
                    <Button text="Free Consultation" buttonClass="largeButton whiteButton pateintCareButton heroImgButton" icon={phoneIcon} />
                </div>
                <div className='patientCaringTexts'>
                    <h4 className='heroTagline patientCaringTagline'>{superText}</h4>
                    
                    <h1 className='heroHeadline patientCaringHeadLine'>
                        Patient <span>Caring</span>
                    </h1>
                    <p className='heroSubtext patientCaringSubtext'>{subText}</p>
                    
                    <div className='noteList'>
                        <div className='noteListItem'><img src={blueTick} alt="blue tick"/><span>{note1}</span></div>
                        <div className='noteListItem'><img src={blueTick} alt="blue tick"/><span>{note2}</span></div>
                        <div className='noteListItem'><img src={blueTick} alt="blue tick"/><span>{note3}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
