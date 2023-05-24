import React from 'react';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
const OrderOnlineSec = () => {
    return (
        <div className='my-10'>
            <Sectiontitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></Sectiontitle>

            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <img src={slide2} alt="" />
                        </SwiperSlide>
                    <SwiperSlide> <img src={slide3} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={slide4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img src={slide5} alt="" /></SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default OrderOnlineSec;