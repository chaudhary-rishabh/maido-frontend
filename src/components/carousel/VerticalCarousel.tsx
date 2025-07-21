'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type CarouselItem = {
    id: number,
    name: string,
    message: string
}

type VerticalCarouselProps = {
    items: CarouselItem[];
};

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
    const verticalSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
    };

    return (
        <>
            <Slider {...verticalSettings}>
                {items.map((item) => (
                    <article key={item.id} className="flex max-w-xl flex-col items-start justify-between hover:shadow-2xl cursor-pointer text-center min-h-52 mt-6 text-sm shadow-lg bg-gray-50 rounded-2xl p-4 text-green-500">
                        <div className="flex items-center gap-x-4 text-xs">
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                {item.name}
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.message}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <Image src="/maidoLogoThree.png" alt="Sakmap founders words" className="h-10 w-10 rounded-full bg-gray-50" width={100} height={100} />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </Slider>
        </>
    );
};

export default VerticalCarousel;
