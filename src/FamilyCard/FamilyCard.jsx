import React from "react";
import "./FamilyCard.css";

export default function FamilyCard ({icon, cardNo, text}) {
    return (
        <div className='FamilyCard'>
            <img src={icon} alt=""/>
            <h3>{cardNo}</h3>
            <p>{text}</p>
        </div>
    );
};
