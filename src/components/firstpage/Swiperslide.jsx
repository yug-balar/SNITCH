import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';


function Swiperslide() {
    return (
        <Swiper
            pagination={true}
            loop={true}
            autoplay={{
                delay: "2500",
                disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
        >
            <SwiperSlide>
                <img src="https://www.snitch.co.in/cdn/shop/files/Artboard_1_7b54e1c3-29e3-48c3-a430-42ce2168ecc4_1400x.jpg?v=1717510887" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.snitch.co.in/cdn/shop/files/Artboard_2_2_1400x.jpg?v=1717602836" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.snitch.co.in/cdn/shop/files/denim_new_2_2_1_1400x.jpg?v=1717659637" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Swiperslide