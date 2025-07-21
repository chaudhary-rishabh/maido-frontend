import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const BookingCard = () => {
    return (
        <div>
            <div className="relative flex flex-col lg:flex-row lg:justify-around max-w-5xl mx-auto my-6 w-11/12">
                <div className="flex flex-col rounded-3xl shadow-xl border-2 border-gray-100 bg-white shadow-gray-100 p-3 m-4  items-center">
                    <div className="relative flex mx-auto h-auto m-2 overflow-hidden text-white rounded-md">
                        <Image
                            src="/careTakerTwo.png"
                            alt="maido book now"
                            height={100}
                            width={100}
                            className="w-full rounded-3xl"
                        />
                        <p className='text-black font-semibold p-4 lg:text-md text-sm'>
                            Checkout various services by maido search and book now
                        </p>
                    </div>
                    <Link href={"/services"} className="px-4 pb-4 pt-0">
                        <Button className="mx-auto" content="All Services" />
                    </Link>
                </div>
                <div className="flex flex-col rounded-3xl shadow-xl border-2 border-gray-100 bg-white shadow-gray-100 p-3 m-4 items-center">
                    <div className="relative flex mx-auto h-auto m-2 overflow-hidden text-white rounded-md">
                        <Image
                            src="/maidoPaintOne.png"
                            alt="maido book now"
                            height={100}
                            width={100}
                            className="w-full rounded-3xl"
                        />
                        <p className='text-black font-semibold p-4 lg:text-md text-sm'>
                            Best maid services for cleaning and housekeeping
                        </p>
                    </div>
                    <Link href={"/services"} className="px-4 pb-4 pt-0">
                        <Button className="mx-auto" content="All Rounder" />
                    </Link>
                </div>
                <div className="flex flex-col rounded-3xl shadow-xl border-2 border-gray-100 bg-white shadow-gray-100 p-3 m-4 items-center">
                    <div className="relative flex mx-auto h-auto m-2 overflow-hidden text-white rounded-md">
                        <Image
                            src="/maidoPaintTwo.png"
                            alt="maido book now"
                            height={100}
                            width={100}
                            className="w-full rounded-3xl"
                        />
                        <p className='text-black font-semibold p-4 lg:text-md text-sm'>
                            Subscribe now and get maido services anytime anywhere
                        </p>
                    </div>
                    <Link href={"/services"} className="px-4 pb-4 pt-0">
                        <Button className="mx-auto" content="Subscribe" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;