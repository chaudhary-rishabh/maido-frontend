import React from 'react'
import VerticalCarousel from '../carousel/VerticalCarousel';
import HorizontalCarousel from '../carousel/HorizontalCarousel';

const HomeReview = () => {
    const VerticalReviews = [
        {
            id: 1,
            name: 'Rishabh',
            message: 'this is sample review message short and simple'
        },
        {
            id: 2,
            name: 'chaudhary',
            message: 'this is sample review message short and simple, Long Message'
        },
        {
            id: 3,
            name: 'Ritik',
            message: 'this is sample review message short and simplethis is sample review message short and simple'
        },
        {
            id: 4,
            name: 'John Smith',
            message: 'this is sample review message short and simple, long message about services at maido given 5 stars'
        },
        {
            id: 5,
            name: 'Smilga',
            message: 'this is sample review message short and simple'
        },
        {
            id: 6,
            name: 'Doe',
            message: 'this is sample review message short and simple'
        },
        {
            id: 7,
            name: 'Smith',
            message: 'this is sample review message short and simple, this is sample review message short and simple'
        },
        {
            id: 8,
            name: 'Giannis',
            message: 'this is sample review message short and simple'
        }
    ];

    const HorizontalReviews = [

        {
            id: 1,
            name: 'Rishabh',
            message: 'this is sample review message short and simple'
        },
        {
            id: 2,
            name: 'chaudhary',
            message: 'this is sample review message short and simple, Long Message'
        },
        {
            id: 3,
            name: 'Ritik',
            message: 'this is sample review message short and simplethis is sample review message short and simple'
        },
        {
            id: 4,
            name: 'John Smith',
            message: 'this is sample review message short and simple, long message about services at maido given 5 stars'
        },
        {
            id: 5,
            name: 'Smilga',
            message: 'this is sample review message short and simple'
        },
        {
            id: 6,
            name: 'Doe',
            message: 'this is sample review message short and simple'
        },
        {
            id: 7,
            name: 'Smith',
            message: 'this is sample review message short and simple, this is sample review message short and simple'
        },
        {
            id: 8,
            name: 'Giannis',
            message: 'this is sample review message short and simple'
        }

    ];
    return (
        <section className="py-10">
            <div className="mx-auto max-w-3x mb-auto bg-white w-11/12 max-w-5xl rounded-3xl min-h-screen px-4 sm:px-6 lg:px-16">
                <div
                    className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
                >
                    <div className="w-64 mt-5 gap-8 text-4xl rounded-3xl p-4">
                        <VerticalCarousel items={VerticalReviews} />
                    </div>
                    <div className="mx-auto lg:w-96 w-11/12">
                        <p className='max-w-16 my-5 gap-2 rounded-3xl shadow-xl shadow-gray-300 bg-white p-4 animate-border-gradient text-5xl pt-10 font-bold text-black'>❝</p>
                        <div className="w-11/12 mt-5 text-4xl rounded-3xl">
                            <HorizontalCarousel items={HorizontalReviews} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeReview
