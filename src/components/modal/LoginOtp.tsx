'use client'

import { useState } from 'react'
import XIcon from '../icons/xIcon';

export default function LoginOtp() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex justify-between align-top">
                <button className="text-black font-bold mr-5" onClick={() => setOpen(true)}>Login&rarr;</button>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={() => setOpen(false)} // Close modal when clicking on the overlay
                >
                    <div
                        className="bg-white shadow-md shadow-cyan-50/30 w-1/3 rounded-3xl p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <div className="flex justify-end">
                            <button className="text-black font-bold text-xl" onClick={() => setOpen(false)}><XIcon /></button>
                        </div>
                        <div className="flex flex-col w-72 m-auto p-2">
                            <label className='text-black m-2 font-bold' htmlFor='email'>Enter OTP</label>
                            <input className='outline-none text-black m-auto focus:border-green-300 border-gray-200 border-2 w-full h-12 shadow-lg bg-slate-100 p-2 rounded-xl' type="email" placeholder="Enter your email or  phone number" />
                        </div>
                        <div className="flex justify-center p-2">
                            <button className="text-black bg-green-300 rounded-xl p-2 px-4 hover:shadow-xl">Next&rarr;</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
