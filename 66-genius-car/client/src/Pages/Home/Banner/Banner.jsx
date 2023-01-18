import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import './Banner.css';

import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';


const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            autoHeight={true}
            spaceBetween={30}
            keyboard={{
                enabled: true,
            }}
            autoplay={{
                delay: 20000,
                disableOnInteraction: false,
            }}
            pagination={false}
            navigation={true}
            modules={[Autoplay, Keyboard, Pagination, Navigation]}
            className="mySwiper w-full"
        >
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img1} alt="image 1" loading="lazy" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-[#0009]"></div>
                <div className="flex flex-col gap-4 absolute left-24 top-1/4 text-white">
                    <h2 className="text-6xl font-bold">Affordable<br />Price For Car<br />Servicing</h2>
                    <p>There are many variations of passages of available, but
                        <br />
                        the majority have suffered alteration in some form</p>
                    <span className="flex gap-5">
                        <button className="btn rounded bg-red-500 hover:bg-red-400 border-0">Discover More</button>
                        <button className="btn btn-outline rounded glass bg-red-300 hover:bg-red-200 hover:text-black">Latest Project</button>
                    </span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img2} alt="image 2" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img3} alt="image 3" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img4} alt="image 4" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img5} alt="image 5" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={img6} alt="image 6" loading="lazy" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;