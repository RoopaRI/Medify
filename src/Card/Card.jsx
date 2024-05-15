import React from "react";
import "./Card.css";

export default function Card(props){
    const {image,text,customStyle, cardClass} =props;
    return(
        <div className={`Card ${customStyle} ${cardClass}`}> 
            <img src={image} className="cardImage" alt="CardImage"/>
            <span className="cardText">{text}</span>
        </div>
    );
}