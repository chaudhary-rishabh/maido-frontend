import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-white border w-11/12 shadow-2xl mx-auto rounded-t-3xl text-black pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Lets keep in touch!</h4>

                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                            <>
                                <p className="text-md font-bold mt-0 mb-2 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                                    support@maido.in
                                </p>
                                <p className="text-md font-bold mt-0 mb-2 text-blueGray-600 hover:text-blue-500 cursor-pointer">
                                    +91 2840284280
                                </p>
                            </>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Connect</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">MIT License</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/terms">Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/policy">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-black" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span> Maido Vadodara
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer