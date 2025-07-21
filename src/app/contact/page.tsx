'use client'

export default function ContactPage() {

    return (
        <>
            <div className="mt-1 sm:mt-8">
                <div className="mx-auto w-10/12 py-6 overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mt-16 lg:mt-0 mx-auto">
                        <form className="mx-auto max-w-xl sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            autoComplete="given-name"
                                            value={""}
                                            // onChange={""}
                                            required
                                            className="block w-full border bg-gray-50 border-gray-300 rounded-2xl px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            autoComplete="family-name"
                                            value={""}
                                            // onChange={""}
                                            required
                                            className="block w-full border bg-gray-50 border-gray-300 rounded-2xl px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            value={""}
                                            // onChange={""}
                                            required
                                            className="block w-full border bg-gray-50 border-gray-300 rounded-2xl px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                        />

                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Phone number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative mt-2.5">
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            autoComplete="tel"
                                            value={""}
                                            // onChange={""}
                                            required
                                            className="block w-full border bg-gray-50 border-gray-300 rounded-2xl px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={""}
                                            // onChange={""}
                                            required
                                            className="block w-full border bg-gray-50 border-gray-300 rounded-2xl px-3.5 py-2 text-gray-900 shadow-lg placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:shadow-2xl focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full border shadow-lg rounded-3xl bg-gradient-to-r from-green-300 via-yellow-300 to-orange-200 bg-[length:200%_200%] hover:bg-[position:30%] transition-all duration-500 ease-in-out px-3.5 py-2.5 text-center text-sm font-semibold text-green-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                >
                                    Let&apos;s talk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
