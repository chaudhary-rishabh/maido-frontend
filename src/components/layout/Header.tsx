"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Auth from "../modal/Auth";
import { usePathname } from "next/navigation";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const pathname = usePathname();

    // Navigation items with their paths
    const navItems = [
        { name: "Services", path: "/services" },
        { name: "How it Works", path: "/howitworks" },
        { name: "About Us", path: "/about" },
        { name: "Pricing", path: "/pricing" },
    ];

    return (
        <>
            <header
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[999] w-11/12 max-w-6xl rounded-2xl shadow-xl shadow-green-200/50
                   bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border border-gray-50 transition-all duration-300"
            >
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Maido</span>
                            <Image
                                width={70}
                                height={70}
                                alt="Maido"
                                src="/MaidoLogo2.png"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm/6 text-green-600 px-3 rounded-xl font-semibold border-b-2 border-transparent hover:border-b-green-500 transition-all duration-300 ${pathname === item.path ? "border-b-green-500" : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            href="/auth/signup"
                            className="text-black bg-green-300 hover:bg-green-400 font-bold p-2 hover:shadow-2xl mx-2 rounded-xl flex items-center gap-1 transition-all duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(true);
                            }}
                        >
                            <span>Signup</span> <span>→</span>
                        </Link>
                        <Link
                            href="/auth/login"
                            className="text-black bg-green-300 hover:bg-green-400 font-bold p-2 hover:shadow-2xl mx-2 rounded-xl flex items-center gap-1 transition-all duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenLogin(true);
                            }}
                        >
                            Login
                            <span>→</span>
                        </Link>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-[998]" />
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/30 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Maido</span>
                                <Image
                                    width={70}
                                    height={70}
                                    alt="Maido"
                                    src="/MaidoLogo2.png"
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-green-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-green-50/50 transition-all duration-300 ${pathname === item.path ? "border-b-2 border-green-500" : ""
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/auth/login"
                                        className="text-black bg-green-300 hover:bg-green-400 font-bold p-2 rounded-xl flex items-center gap-1 transition-all duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpenLogin(true);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <span>Login</span> <span>→</span>
                                    </Link>
                                    <Link
                                        href="/auth/signup"
                                        className="text-black bg-green-300 hover:bg-green-400 font-bold p-2 mt-2 rounded-xl flex items-center gap-1 transition-all duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <span>Signup</span> <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <Auth open={open} setOpen={setOpen} openLogin={openLogin} setOpenLogin={setOpenLogin} />
        </>
    );
}