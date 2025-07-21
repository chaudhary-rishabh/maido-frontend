'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function SwiperSlider() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]} // Remove Navigation
            spaceBetween={30}
            slidesPerView={1} // Default to 2 slides
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
                768: { slidesPerView: 2 }, // Show 2 slides on larger screens
            }}
        >
            <SwiperSlide>
                <div className="mx-auto bg-white w-80 p-12 rounded-2xl">
                    <Image className="mx-auto w-72 rounded-2xl" src="/maidoCareTaker3.png" alt="slider" height={200} width={100} />
                    <p className="text-gray-600 tex-sm text-center m-2 font-bold">Maid 30 min away</p>
                    <button className="tex-sm m-2 text-green-400 text-center p-2 mx-auto px-3 rounded-xl shadow-md hover:shadow-xl font-semibold">Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-auto bg-white w-80 p-12 rounded-2xl">
                    <Image className="mx-auto w-72 rounded-2xl" src="/maidoMaid3.png" alt="slider" height={200} width={100} />
                    <p className="text-gray-600 tex-sm text-center m-2 font-bold">Maid 30 min away</p>
                    <button className="tex-sm m-2 text-green-400 text-center p-2 mx-auto px-3 rounded-xl shadow-md hover:shadow-xl font-semibold">Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-auto bg-white w-80 p-12 rounded-2xl">
                    <Image className="mx-auto w-72 rounded-2xl" src="/maidoMaid4.png" alt="slider" height={200} width={100} />
                    <p className="text-gray-600 tex-sm text-center m-2 font-bold">Maid 30 min away</p>
                    <button className="tex-sm m-2 text-green-400 text-center p-2 mx-auto px-3 rounded-xl shadow-md hover:shadow-xl font-semibold">Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-auto bg-white w-80 p-12 rounded-2xl">
                    <Image className="mx-auto w-72 rounded-2xl" src="/maidoCareTaker5.png" alt="slider" height={200} width={100} />
                    <p className="text-gray-600 tex-sm text-center m-2 font-bold">Maid 30 min away</p>
                    <button className="tex-sm m-2 text-green-400 text-center p-2 mx-auto px-3 rounded-xl shadow-md hover:shadow-xl font-semibold">Book Now</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
