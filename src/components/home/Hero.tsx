'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
    const [mainImage, setMainImage] = useState("/maidoCareTaker7.png");
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setMainImage("/MaidoHomeMaid.png");
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="relative mx-auto mt-24 w-11/12 p-4 rounded-3xl max-w-5xl flex flex-col">
            <div className="flex flex-col mb-6 items-center gap-2">
                <p className="text-lg lg:text:xl text-gray-900 font-semibold text-center" style={{ textShadow: '0 2px 8px rgb(115, 252, 156)' }}>
                    Maido: Home chaos? We slay it.
                </p>
                <p className="text-sm lg:text:md font-medium text-gray-900 text-center">
                    Cooks, maids, nannies—vibes sorted.
                </p>
                <Link href="/services"
                    className="rounded-3xl p-3 m-1 
                    bg-gradient-to-t from-green-500 to-green-100 
                    shadow-[2px_3px_10px_rgba(20,167,62,0.4)] 
                    hover:shadow-[10px_1px_20px_rgba(39,167,62,0.4)] 
                    active:shadow-[2px_3px_20px_rgba(20,167,62,0.9)]  
                    text-xl text-black font-dosis font-semibold 
                    transition-all duration-500 ease-in-out 
                    hover:translate-y-[5px] 
                    active:opacity-90 cursor-pointer border-2 border-white outline-none glare-effect"
                >
                    Book Now
                </Link>
            </div>
            {/* Image Section */}
            <div className="mx-auto relative">
                {/* Main Image */}
                <Image
                    alt="Maido Image"
                    src={mainImage}
                    width={2100}
                    height={1200}
                    className="w-9/12 lg:w-full mx-auto max-w-[24rem] sm:max-w-[30rem] rounded-3xl shadow-[12px_12px_100px_green] shadow-green-500 mb-10 ring-1 ring-gray-400/10 object-contain"
                />

                <div
                    className="absolute sm:bottom-80 sm:left-[-100px] bottom-56 left-[-10px] right-0 sm:h-5/12 sm:w-3/6 w-2/6 h-3/12 bg-white shadow-2xl shadow-gray-700/40 hover:shadow-2xl hover:shadow-gray-900/50 rounded-[50px_50px_0px_50px] transition-shadow duration-500"
                >
                    <div className="flex flex-col items-center gap-1 p-2 sm:gap-4 sm:p-4">
                        <p className="text-xs lg:text-xl text-gray-600 p-1 font-semibold text-center">
                            Our Services
                        </p>
                        <p className="text-xs lg:text-md font-medium text-gray-500 p-2 text-center">
                            Range of services.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute sm:bottom-32 sm:left-96 bottom-28 left-56 right-0 h-1/12 w-2/6 bg-white shadow-2xl rounded-2xl"
                >
                    <div className="flex flex-col items-center gap-1 p-1 px-2 sm:gap-4 sm:p-4">
                        <p className="text-xs lg:text-lg text-green-700 font-semibold text-center">
                            Our Services
                        </p>
                    </div>
                </div>
                {/* Thumbnail Images */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-2">
                    <Image
                        alt="Maido Thumbnail 1"
                        src="/maidoCareTaker7.png"
                        width={100}
                        height={100}
                        onClick={() => setMainImage("/maidoCareTaker7.png")}
                        className="border-4 border-white cursor-pointer w-3/12 sm:w-1/5 rounded-2xl shadow-lg shadow-gray-300/60 hover:shadow-black/50 hover:shadow-xl transition-shadow duration-500 object-contain"
                    />
                    <Image
                        alt="Maido Thumbnail 2"
                        src="/maidoNanny3.png"
                        width={100}
                        height={100}
                        onClick={() => setMainImage("/maidoNanny3.png")}
                        className="border-4 border-white cursor-pointer w-3/12 sm:w-1/5 rounded-2xl shadow-lg shadow-gray-300/60 hover:shadow-black/50 hover:shadow-xl transition-shadow duration-500 object-contain"
                    />
                    <Image
                        alt="Maido Thumbnail 3"
                        src="/maidoCook1.png"
                        width={100}
                        height={100}
                        onClick={() => setMainImage("/maidoCook1.png")}
                        className="border-4 border-white cursor-pointer w-3/12 sm:w-1/5 rounded-2xl shadow-lg shadow-gray-300/60 hover:shadow-black/50 hover:shadow-xl transition-shadow duration-500 object-contain"
                    />
                    <Image
                        alt="Maido Thumbnail 4"
                        src="/maidoShopAssistant5.png"
                        width={100}
                        height={100}
                        onClick={() => setMainImage("/maidoShopAssistant5.png")}
                        className="border-4 border-white cursor-pointer w-3/12 sm:w-1/5 rounded-2xl shadow-lg shadow-gray-300/60 hover:shadow-black/50 hover:shadow-xl transition-shadow duration-500 object-contain"
                    />
                    <Image
                        alt="Maido Thumbnail 5"
                        src="/maidoCarCleaner5.png"
                        width={100}
                        height={100}
                        onClick={() => setMainImage("/maidoCarCleaner5.png")}
                        className="border-4 border-white cursor-pointer hidden lg:block w-3/12 sm:w-1/5 rounded-2xl shadow-lg shadow-gray-300/60 hover:shadow-black/50 hover:shadow-xl transition-shadow duration-500 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}