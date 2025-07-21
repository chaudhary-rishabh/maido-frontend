"use client";
import { useState } from "react";

export default function HomeServiceCardLeft() {
    const [selectedService, setSelectedService] = useState("Hover over the options");

    const services = [
        { name: "Maid", description: "Professional maid services for cleaning and housekeeping." },
        { name: "Nanny", description: "Experienced nanny for childcare and supervision." },
        { name: "Care Taker", description: "Reliable caretakers for elderly and special needs care." },
        { name: "Cook", description: "Expert chefs to prepare delicious meals at your home." },
        { name: "All Rounder", description: "Versatile help for multiple household chores." },
    ];

    return (
        <div className="mx-auto max-w-5xl py-2 px-1 sm:px-6 lg:px-8 relative">
            <div
                className="relative flex flex-col border-8 border-white bg-yellow-50 rounded-3xl p-6 w-11/12 max-w-5xl min-h-[30rem] mx-auto mt-10 transition-all duration-500"
            >
                <article className="flex flex-col items-start justify-center h-full">
                    <div className="group relative text-center w-full">
                        <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300">
                            {selectedService}
                        </h3>
                        <p className="mt-4 text-sm text-gray-600 transition-opacity duration-300">
                            {services.find((service) => service.name === selectedService)?.description ||
                                "Select a service to see details."}
                        </p>
                    </div>
                </article>

                {/* Smaller Container Positioned at Bottom Left */}
                <div
                    className="absolute bottom-20 left-[-20px] bg-white shadow-md shadow-gray-400/70 hover:shadow-2xl hover:shadow-gray-700/60 border-[9px] border-green-300 rounded-[38px] min-h-64 w-full max-w-[10rem] sm:max-w-40 lg:max-w-64 transition-shadow duration-500"
                >
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setSelectedService(service.name)}
                                onMouseLeave={() => setSelectedService("Hover over the options")}
                                className={`relative hover:[text-shadow:_0_2px_8px_rgb(0_0_0_/_0.4)] text-sm hover:text-2xl w-full font-semibold text-gray-900 px-8 py-4 transition-all duration-300 ${index === 0 ? "rounded-t-[30px]" : index === services.length - 1 ? "rounded-b-[30px]" : ""
                                    }`}
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}