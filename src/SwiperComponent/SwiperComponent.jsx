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


export default function SwiperComponent({type, classForMargin}){

    
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
                        <SwiperSlide key={`100`}><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide key={`101`}><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide key={`102`}><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide key={`103`}><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide key={`104`}><Discount cardNo={1}/></SwiperSlide>
                        <SwiperSlide key={`105`}><Discount cardNo={2}/></SwiperSlide>
                        <SwiperSlide key={`106`}><Discount cardNo={1}/></SwiperSlide>
                    </>      
                );
            }else{
                return (
                    doctorsData.map((item, idx) => {
                        const {name, specialization, image} = item
                        return (
                            <SwiperSlide key={`doctor-${idx+1}`} className='doctorsSlide'>
                                <SpecialistCard cardNo={idx+1} name={name} specialization={specialization} image={image} />
                            </SwiperSlide>
                        )
                    })
            )

            //         <>
                    
            //         <SpecialistCard cardNo={7} image={doctorsData[0].image} name="Dr. John Doe" specialization="Neurologist"/>
            //         <SpecialistCard cardNo={7} image={doctorsData[1].image} name="Dr. John Doe" specialization="Neurologist"/>
            //         </>
            
            // )
            }
        }

        return(
            <div className={`CardHolder ${classForMargin}`}>
                {type === "persons" ? <h3>Our Medical Specialist</h3> : null}
            <div className='cardHolderWrapper commonContainer'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={type === "offers" ? 393 : null}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    // modules={[Autoplay, Pagination, Navigation]}
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
