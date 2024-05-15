import React from "react";
import Discount from "../Discount/Discount";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import "./SwiperComponent.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import person1 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-1.png";
import person2 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-2.png";
import person3 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo.png";
import person4 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-1.png";
import person5 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-2.png";


export default function SwiperComponent({type}){

    
    const doctorsData = [
        {name: "Dr. Lesley Hull", specialization: "Medicine", image: person1},
        {name: "Dr. Ahmad Khan", specialization: "Neurologist", image: person2},
        {name: "Dr. Heena Sachdeva", specialization: "Orthopadics", image: person3},
        {name: "Dr. Ankur Sharma", specialization: "Orthopadics", image: person4},
        {name: "Dr. Ahmad Stevens", specialization: "Neurologist", image: person5},
    ]


        const displayCards = () => {
            if(type === "offers"){
                return (
                    <>
                        <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                    </>      
                );
            }else{return (
                doctorsData.map((item, idx) => {
                    const {name, specialization, image} = item
                    return (
                        <SwiperSlide className='doctorsSlide'>
                            <SpecialistCard cardNo={idx+1} key={`${name}Image`} name={name} specialization={specialization} image={image} />
                        </SwiperSlide>
                    )
                })
            )
            }
        }

        return(
            <div className={`CardHolder`}>
            <div className='cardHolderWrapper commonContainer'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={393}
                    Pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    // modules={[Autoplay]}
                    className="mySwiper"
                >
                    {displayCards()}
                </Swiper>
                <div className='RadioButtons'>
            
                    <input className='radioButton' type="radio" id="radioButton1" name="radioButton" /> 
                    <input className='radioButton' type="radio" id="radioButton2" name="radioButton" />
                    <input className='radioButton' type="radio" id="radioButton3" name="radioButton" />
            
                 </div>
            </div> 
        </div>
        );
}