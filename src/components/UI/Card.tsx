import Link from "next/link";
import React from "react";

interface CardProps {
    price: string;
    title: string;
    description: string;
}

export default function Card({ price, title, description }: CardProps) {
    return (
        <Link href={`/services/${title}`}
            className={`relative mx-auto mt-4 w-11/12 h-72 md:w-72 lg:w-96 z-10 rounded-3xl shadow-xl max-w-11/12 border-2 border-transparent hover:border-green-400 p-8 cursor-pointer overflow-hidden transition-all duration-300`}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"
            }}
        >
            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center rounded-2xl bg-green-400/80 backdrop-blur-sm p-2 justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded-full">
                        {price}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-md text-black font-bold">→</span>
                    </div>
                </div>
                <h2 className="text-lg font-semibold text-black mb-2">{title}</h2>
                <p className="text-sm text-gray-900">{description}</p>
            </div>
        </Link>
    );
}