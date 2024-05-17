import React from "react";
import Discount from "../Discount/Discount";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import "./SwiperComponent.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import person1 from "../assets/Medify_assests/medicalSpecialist/Heena.png";
import person2 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-inner.png";
import person3 from "../assets/Medify_assests/medicalSpecialist/div.med-stl-3-photo-inner-2.png";
import person4 from "../assets/Medify_assests/medicalSpecialist/doctorImage1.png";
import person5 from "../assets/Medify_assests/medicalSpecialist/doctorImage5.png";


export default function SwiperComponent({type, classForMargin}){

    
    const doctorsData = [
        {name: "Dr. Lesley Hull", specialization: "Medicine", image: person1},
        {name: "Dr. Ahmad Khan", specialization: "Neurologist", image: person2},
        {name: "Dr. Heena Sachdeva", specialization: "Orthopadics", image: person3},
        {name: "Dr. Ankur Sharma", specialization: "Orthopadics", image: person4},
        {name: "Dr. Ahmad Stevens", specialization: "Neurologist", image: person5},
    ]


        // const displayCards = () => {
        //     if(type === "offers"){
        //         return (
        //             <>
        //                 <SwiperSlide key={`100`}><Discount cardNo={1}/></SwiperSlide>
        //                 <SwiperSlide key={`101`}><Discount cardNo={2}/></SwiperSlide>
        //                 <SwiperSlide key={`102`}><Discount cardNo={1}/></SwiperSlide>
        //                 <SwiperSlide key={`103`}><Discount cardNo={2}/></SwiperSlide>
        //                 <SwiperSlide key={`104`}><Discount cardNo={1}/></SwiperSlide>
        //                 <SwiperSlide key={`105`}><Discount cardNo={2}/></SwiperSlide>
        //                 <SwiperSlide key={`106`}><Discount cardNo={1}/></SwiperSlide>
        //             </>      
        //         );
        //     }else{
        //         return (
        //             // doctorsData.map((item, idx) => {
        //             //     const {name, specialization, image} = item;
        //             //     return (
        //             //         <SwiperSlide key={`doctor-${idx+1}`} className='doctorsSlide'>
        //             //             <SpecialistCard cardNo={idx+1} name={name} specialization={specialization} image={image} />
        //             //         </SwiperSlide>
        //             //     );
        //             // })

        //             <div className="person">
        //                 <SwiperSlide key={500}>
        //                 <SpecialistCard cardNo={1000} name={doctorsData[0].name} specialization={doctorsData[0].specialization} image={doctorsData[0].image} />
                
        //                 </SwiperSlide>
        //                 <SwiperSlide key={502}>
        //                 <SpecialistCard cardNo={2000} name={doctorsData[1].name} specialization={doctorsData[1].specialization} image={doctorsData[1].image} />
        //                 </SwiperSlide>
        //                 {/* <SwiperSlide>
        //                 <SpecialistCard cardNo={3000} name={doctorsData[2].name} specialization={doctorsData[2].specialization} image={doctorsData[2].image} />
        //                 </SwiperSlide> */}
                        
                    
        //             </div>
        //     );
        // }      
        // }

        return(
            <div className={`CardHolder ${classForMargin}`}>
                {type === "offers" ? <div className='cardHolderWrapper commonContainer'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={393}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                   
                >
                    {/* {displayCards()} */}
                    <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={1}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={2}/></SwiperSlide>
                    <SwiperSlide><Discount cardNo={1}/></SwiperSlide>

                </Swiper>
                <div className='RadioButtons'>
            
                    <input className='radioButton' type="radio" id="radioButton1" name="radioButton" /> 
                    <input className='radioButton' type="radio" id="radioButton2" name="radioButton" />
                    <input className='radioButton' type="radio" id="radioButton3" name="radioButton" />
            
                 </div>
            </div>  : <div className='cardHolderWrapper commonContainer'>
            <h3>Our Medical Specialist</h3>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={393}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                  
                >
                    {/* {displayCards()} */}
        
                    <SwiperSlide><SpecialistCard cardNo={1000} name={doctorsData[0].name} specialization={doctorsData[0].specialization} image={doctorsData[0].image} /></SwiperSlide>
                    <SwiperSlide><SpecialistCard cardNo={2000} name={doctorsData[1].name} specialization={doctorsData[1].specialization} image={doctorsData[1].image} /></SwiperSlide>
                    <SwiperSlide><SpecialistCard cardNo={3000} name={doctorsData[2].name} specialization={doctorsData[2].specialization} image={doctorsData[2].image} /></SwiperSlide>
                    <SwiperSlide><SpecialistCard cardNo={4000} name={doctorsData[3].name} specialization={doctorsData[3].specialization} image={doctorsData[3].image} /></SwiperSlide>
                    <SwiperSlide><SpecialistCard cardNo={5000} name={doctorsData[4].name} specialization={doctorsData[4].specialization} image={doctorsData[4].image} /></SwiperSlide>
                    
                </Swiper>
                <div className='RadioButtons'>
            
                    <input className='radioButton' type="radio" id="radioButton1" name="radioButton" /> 
                    <input className='radioButton' type="radio" id="radioButton2" name="radioButton" />
                    <input className='radioButton' type="radio" id="radioButton3" name="radioButton" />
            
                 </div>
            </div> }
            
        </div>
        );
}
