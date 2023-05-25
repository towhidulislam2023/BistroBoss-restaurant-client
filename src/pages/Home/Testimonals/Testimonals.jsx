import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Testimonals = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    console.log(review);
    return (
        <div className='my-10'>
            <Sectiontitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></Sectiontitle>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    review && review.map(data => <SwiperSlide key={data._id}>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 300 }}
                                    value={data.rating}
                                    readOnly
                                />
                            </div>
                            <div className=''>
                                <FaQuoteLeft className='text-7xl my-5 text-center'></FaQuoteLeft>

                            </div>
                            <p className='w-[50%] my-2 text-center'>{data.details}</p>
                            <h1 className="text-3xl text-warning">{data.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            

        </div>
    );
};

export default Testimonals;