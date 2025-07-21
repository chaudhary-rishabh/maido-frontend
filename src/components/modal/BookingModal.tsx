// Auth.tsx
"use client";

import { useEffect } from "react";
import XIcon from "../icons/xIcon";

type AuthModalProps = {
    openBookingModal: boolean;
    setOpenBookingModal: (openBookingModal: boolean) => void;
};

export default function BookingModal({ openBookingModal, setOpenBookingModal }: AuthModalProps) {
    useEffect(() => {
        if (openBookingModal) {
            document.body.classList.add("overflow-hidden"); // Prevent scrolling
        } else {
            document.body.classList.remove("overflow-hidden"); // Restore scrolling
        }

        return () => {
            document.body.classList.remove("overflow-hidden"); // Cleanup when unmounted
        };
    }, [openBookingModal]);

    return (
        <>
            {/* Modal for Signup */}
            {openBookingModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm z-[1000] transition-all duration-300"
                    onClick={() => setOpenBookingModal(false)}
                >
                    <div
                        className="bg-white shadow-lg shadow-green-100/30 w-full max-w-md rounded-3xl p-6 border-2 border-green-300 transform transition-all duration-300 scale-100 hover:scale-[1.02] z-[1001]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end">
                            <button
                                className="text-gray-900 font-bold text-xl p-1 hover:text-green-600 transition-colors duration-300"
                                onClick={() => setOpenBookingModal(false)}
                            >
                                <XIcon />
                            </button>
                        </div>
                        <div className="flex flex-col w-full max-w-xs mx-auto p-4">
                            <label
                                className="text-gray-900 font-semibold text-sm mb-2 font-poppins"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="outline-none text-gray-900 border-gray-200 border-2 w-full h-12 shadow-md bg-gray-50 rounded-xl p-2 focus:border-green-300 transition-all duration-300 font-poppins"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs mx-auto p-4">
                            <label
                                className="text-gray-900 font-semibold text-sm mb-2 font-poppins"
                                htmlFor="email"
                            >
                                Phone Number/Email
                            </label>
                            <input
                                className="outline-none text-gray-900 border-gray-200 border-2 w-full h-12 shadow-md bg-gray-50 rounded-xl p-2 focus:border-green-300 transition-all duration-300 font-poppins"
                                type="email"
                                placeholder="Enter your email or phone number"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs mx-auto p-4">
                            <label
                                className="text-gray-900 font-semibold text-sm mb-2 font-poppins"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="outline-none text-gray-900 border-gray-200 border-2 w-full h-12 shadow-md bg-gray-50 rounded-xl p-2 focus:border-green-300 transition-all duration-300 font-poppins"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs mx-auto p-4">
                            <label
                                className="text-gray-900 font-semibold text-sm mb-2 font-poppins"
                                htmlFor="location"
                            >
                                Location
                            </label>
                            <input
                                className="outline-none text-gray-900 border-gray-200 border-2 w-full h-12 shadow-md bg-gray-50 rounded-xl p-2 focus:border-green-300 transition-all duration-300 font-poppins"
                                type="text"
                                placeholder="Enter your location"
                            />
                        </div>
                        <div className="flex justify-center p-4">
                            <button
                                className="text-white bg-green-500 hover:bg-green-600 rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 font-poppins"
                                onClick={() => setOpenBookingModal(false)} // Close modal on button click
                            >
                                Signup →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}