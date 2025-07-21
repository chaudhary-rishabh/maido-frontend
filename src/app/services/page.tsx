import Card from '@/components/UI/Card'
import React from 'react'

const page = () => {
    const item = [
        {
            key: "1",
            price: "₹99",
            title: "Maid",
            description: "Spotless homes with Maid’s fast cleaning services!"
        },
        {
            key: "2",
            price: "₹89",
            title: "Cook",
            description: "Delicious meals tailored just for you!"
        },
        {
            key: "3",
            price: "₹109",
            title: "Nanny",
            description: "Loving care for your little ones, anytime!"
        },
        {
            key: "4",
            price: "₹149",
            title: "Caretaker",
            description: "Compassionate support for those who need it most!"
        },
        {
            key: "5",
            price: "₹89",
            title: "Dog Walker",
            description: "Happy pups with daily walks and fun!"
        },
        {
            key: "6",
            price: "₹99",
            title: "Gardener",
            description: "Green lawns and blooming gardens, made simple!"
        },
        {
            key: "7",
            price: "₹199",
            title: "Personal Driver",
            description: "Ride in style with your own chauffeur!"
        },
        {
            key: "8",
            price: "₹399",
            title: "House Manager",
            description: "Your home, perfectly run, every day!"
        },
        {
            key: "9",
            price: "₹199",
            title: "General Helper",
            description: "Extra hands for all your basic tasks!"
        },
        {
            key: "10",
            price: "₹199",
            title: "Personal Shopper",
            description: "Errands done fast, shopping made easy!"
        },
        {
            key: "11",
            price: "₹129",
            title: "Car Cleaner",
            description: "Shiny, spotless cars at your doorstep!"
        },
        {
            key: "12",
            price: "₹249",
            title: "All-Rounder",
            description: "Versatile help for all household chores!"
        }
    ];

    return (
        <div>
            <div className="max-w-5xl bg-white mx-auto my-20 p-4 w-11/12 mt-28 rounded-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {item.map((item) => {
                        return (
                            <Card
                                key={item.key}
                                price={item.price}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default page;