import React from "react";
import "./Button.css";

export default function Button({text, buttonClass, icon, clickFuntion, formSubmit, rotateIcon}){
    return(
        <button 
            className={`Button ${buttonClass}`} 
            onClick={clickFuntion}
            type={formSubmit ? "submit" : null}
        >
            {icon ? <img alt="Button" src={icon} className={rotateIcon ? 'buttonIcon rotateLoad' : 'buttonIcon'} /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
}