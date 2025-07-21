"use client";
import { useState } from "react";

export default function HomeServiceCard() {
    const [selectedService, setSelectedService] = useState("Hover over the options");

    const services = [
        {
            name: "Maid",
            description: [
                "Daily cleaning and dusting",
                "Utensil washing and floor mopping",
                "Laundry and ironing clothes",
                "Maintaining hygienic kitchen and rooms"
            ]
        },
        {
            name: "Nanny",
            description: [
                "Childcare and supervision",
                "Assistance with feeding and hygiene",
                "Engaging activities and learning",
                "Playtime and emotional support"
            ]
        },
        {
            name: "Care Taker",
            description: [
                "Elderly care and companionship",
                "Medication reminders and assistance",
                "Hygiene and mobility support",
                "Routine monitoring and reporting"
            ]
        },
        {
            name: "Cook",
            description: [
                "Healthy home-style meals",
                "Custom diet and preferences",
                "Meal planning and grocery help",
                "Kitchen cleaning post-cooking"
            ]
        },
        {
            name: "All Rounder",
            description: [
                "Multi-tasking for daily chores",
                "Basic cooking and cleaning",
                "Child and elder care support",
                "Laundry and household management"
            ]
        }
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

                        {Array.isArray(
                            services.find(service => service.name === selectedService)?.description
                        ) ? (
                            <ul className="mt-4 space-y-2 text-sm text-gray-700 text-center list-disc list-inside">
                                {services
                                    .find((service) => service.name === selectedService)
                                    ?.description.map((point, idx) => (
                                        <li key={idx} className="mx-auto max-w-xs">
                                            {point}
                                        </li>
                                    ))}
                            </ul>
                        ) : (
                            <p className="mt-4 text-sm text-gray-600 text-center">
                                Select a service to see details.
                            </p>
                        )}
                    </div>
                </article>

                {/* Smaller Container */}
                <div
                    className="absolute bottom-20 right-[-20px] bg-white shadow-md shadow-gray-400/70 hover:shadow-2xl hover:shadow-gray-700/60 border-[9px] border-green-300 rounded-[38px] min-h-64 w-full max-w-[10rem] sm:max-w-40 lg:max-w-64 transition-shadow duration-500"
                >
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setSelectedService(service.name)}
                                onMouseLeave={() => setSelectedService("Hover over the options")}
                                className={`relative hover:[text-shadow:_0_2px_8px_rgb(0_0_0_/_0.4)] text-sm hover:text-2xl w-full font-semibold text-gray-900 px-8 py-4 transition-all duration-300 ${index === 0
                                        ? "rounded-t-[30px]"
                                        : index === services.length - 1
                                            ? "rounded-b-[30px]"
                                            : ""
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
