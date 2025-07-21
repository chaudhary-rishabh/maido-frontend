'use client'
import SwiperSlider from "../carousel/SwiperSlider";

export default function HomeAllRounder() {
    return (
        <div className="py-4 sm:py-8 mx-2">
            <div className="bg-white shadow-lg border-2 border-gray-200 mt-10 shadow-gray-500/20 rounded-2xl w-5/5 lg:w-3/4 mx-auto min-h-72">
                <SwiperSlider />
            </div>
        </div>
    )
}
