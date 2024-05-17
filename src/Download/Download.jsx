import React from "react";
import "./Download.css";
import mobileImg from "../assets/Medify_assests/Download/mobiles.svg";
import arrowImg from "../assets/Medify_assests/Download/curvedArrow.svg";
import googlePlayImg from "../assets/Medify_assests/Download/googlePlay.svg";
import appStoreImg from "../assets/Medify_assests/Download/appStore.svg";
import Button from '../Button/Button';


export default function Download() {
    const handleSubmit = event => {
        event.preventDefault();
    }
    
    return (
        <div className='Download'>
            <div className='DownloadBody'>
                <div className='mobilesWrapper'>
                    <img src={mobileImg} alt="mobile Image" />
                </div>
                <div className='downloadTexts'>
                    <h3>Download the Medify App</h3>
                    <p>Get the link to download the app</p>
                    <form onSubmit={handleSubmit} className='downloadForm'>
                        <img src={arrowImg} alt='curved arrow' className='curvedArrow' />
                        <div className='downloadFormInput'>
                            <span >+91</span>
                            <input placeholder='Enter phone number' />
                        </div>
                        <Button clickFuntion={handleSubmit} text={"Send SMS"} buttonClass={"largeButton"} />
                    </form>
                    <div className='downloadButtons'>
                        <img src={googlePlayImg} alt="google Play Image" />
                        <img src={appStoreImg} alt="app Store Image" />
                    </div>
                </div>
            </div>
        </div>
    )
};