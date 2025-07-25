'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import BookingOverView from '../modal/BookingOverView'

const product = {
    name: 'Basic Tee 6-Pack',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Home', href: '#' },
        { id: 2, name: 'Services', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
export default function ServiceMain() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    const [selectedHour, setSelectedHour] = useState('1Hour');
    const [selectedPrice, setSelectedPrice] = useState('₹99');

    const menuItems = [
        { id: '1', label: '1 Hour - ₹99 ', value: '1hour-₹99' },
        { id: '2', label: '2 Hours - ₹199 ', value: '2hours-₹199' },
        { id: '3', label: '4 Hours - ₹499 ', value: '4hours-₹499' },
        { id: '4', label: '10 Hours - ₹999 ', value: '10hours-₹999' },
        { id: '5', label: '12 Hours - ₹1499 ', value: '12hours-₹1499' },
        { id: '6', label: '24 Hours - ₹1999 ', value: '24hours-₹1999' },
    ];

    const handleSelect = (value: string) => {
        const [hour, price] = value.split('-');
        setSelectedHour(hour);
        setSelectedPrice(price);
    };
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="mt-20">
            <BookingOverView open={open} setOpen={setOpen} />
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}

                <div className="mx-auto p-6 mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <Image
                            alt={product.images[0].alt}
                            src={"/MaidoHomeMaid.png"}
                            height={100}
                            width={100}
                            className="aspect-3/2 w-full rounded-lg object-cover"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <Image
                            alt={product.images[0].alt}
                            src={"/MaidoHomeMaid.png"}
                            height={100}
                            width={100}
                            className="aspect-3/2 w-full rounded-lg object-cover"
                        />
                    </div>
                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <div className="flex gap-4">
                            <DropdownMenu menuItems={menuItems} selectedValue={selectedHour} onSelect={handleSelect} />
                            <DropdownMenu menuItems={menuItems} selectedValue={selectedPrice} onSelect={handleSelect} />
                        </div>
                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                                'size-5 shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-gray-600 hover:text-gray-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                                        {product.colors.map((color) => (
                                            <Radio
                                                key={color.name}
                                                value={color}
                                                aria-label={color.name}
                                                className={classNames(
                                                    color.selectedClass,
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(color.class, 'size-8 rounded-full border border-black/10')}
                                                />
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="mt-10 flex w-full items-center justify-center rounded-xl border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Book now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-6 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-6 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>


                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
