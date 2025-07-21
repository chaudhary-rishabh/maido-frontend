// components/StickyNote.tsx
"use client";

import React from "react";

interface StickyNoteProps {
    number: string;
    title: string;
    description: string;
    color: string;
    position: string;
    rotate: string;
}

export default function StickyNote({ number, title, description, color, position, rotate }: StickyNoteProps) {
    return (
        <div
            className={`sticky-note ${position} ${rotate} hover:rotate-0 animate-float transition-transform duration-500 mt-2 w-64 md:w-72 lg:w-80 z-10 rounded-3xl shadow-xl max-w-11/12 shadow-gray-300/70 p-8 animate-float`}
            style={{ backgroundColor: color }}
        >
            <div className="flex items-center rounded-2xl bg-white p-2 justify-between mb-2">
                <span className="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {number}
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-md text-black font-bold">&rarr;</span>
                </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}