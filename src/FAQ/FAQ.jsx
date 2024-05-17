import React from "react";
import "./FAQ.css";
import FAQHeart from "../assets/Medify_assests/FAQ/heart.png";
import smiley from "../assets/Medify_assests/FAQ/smile.png";
import plus from "../assets/Medify_assests/FAQ/plus.png";
import Button from '../Button/Button';

const text1 = "Why choose our medical for your family?";
const text2 = "Why we are different from others?";
const text3 = "Trusted & experience senior care & love";
const text4 = "How to get appointment for emergency";

export default function FAQ() {
    const faqData = [ text1, text2, text3, text4 ];
    const displayFaqs = () => {
        return faqData.map(item => {
            return (
                <div className='faqQuestion'>
                    <span className=''>{item}</span>
                    <img src={plus} alt='plus icon' />
                </div>
            )
        })
    }
    return (
        <div className='FAQ'>
            <div className='commonContainer FAQBody'>
                <p>{"Get Your Answer"}</p>
                <h3>{"Frequently Asked Questions"}</h3>
                <div className='FAQLowerBody'>
                    <div className='FAQ-1'>
                        <div className="FAQImg">
                            <img src={FAQHeart} alt={"FAQHeart"} className=" FAQemoticon FAQHeart"/>
                            <Button text="84k+ Happy Patients" buttonClass="largeButton whiteButton FAQSmileyButton FAQemoticon" icon={smiley}/>
                        </div>
                    </div>
                    <div className="FAQ-2">
                        {displayFaqs()}
                    </div>
                </div>
            </div>
        </div>
    );
};
