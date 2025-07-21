// pages/index.tsx
"use client";

import React from "react";
import StickyNote from "@/components/UI/StickyNote";

export default function Home() {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center align-middle bg-gradient-to-t from-white via-green-100 to-white p-6 zoverflow-hidden">
            {/* Background pattern (optional for aesthetic) */}
            {/* Sticky Notes and Dashed Lines */}
            <div className="max-w-7xl mt-14 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                {/* Step 01 - Make Account */}
                <StickyNote
                    number="01"
                    title="Make Account"
                    description="Sign up in seconds to unlock Maido’s fast services—cook, maid, nanny, and more!"
                    color="#fff4f4"
                    position="top-20 left-10 md:left-20"
                    rotate="rotate-[8deg]"
                />

                {/* Step 02 - Book Service */}
                <StickyNote
                    number="02"
                    title="Book Service"
                    description="Choose your cook, maid, nanny, caretaker, or all-rounder—quick and easy!"
                    color="#f4f4ff"
                    position="top-20 left-40 md:left-[500px]"
                    rotate="rotate-[-8deg]"
                />

                {/* Step 03 - Get Service in 30-60 Minutes */}
                <StickyNote
                    number="03"
                    title="Get Service in 30-60 Minutes"
                    description="Fast delivery—your help arrives in under an hour, hassle-free!"
                    color="#f4fff4"
                    position="top-96 left-10 md:left-20"
                    rotate="rotate-[8deg]"
                />

                {/* Step 04 - Enjoy Hassle-Free Living */}
                <StickyNote
                    number="04"
                    title="Enjoy Hassle-Free Living"
                    description="Relax with clean homes, tasty meals, and carefree days—Maido vibes sorted!"
                    color="#fff4f4"
                    position="top-96 left-40 md:left-[500px]"
                    rotate="rotate-[-8deg]"
                />
            </div>
        </div>
    );
}