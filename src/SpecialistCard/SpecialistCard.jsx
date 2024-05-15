import React from "react";
import "./SpecialistCard.css";

export default function SpecialistCard(props){
    const { cardNo, image, name, specialization } = props;
    return(
        <div className='PersonCard'>
            <div className='personImageDiv'>
                <img src={image} alt='name' id={`doctorImg-${cardNo}`}/>
            </div>
            <div className='personName'>{name}</div>
            <div className='personSpecialization'>{specialization}</div>
        </div>
    );
}