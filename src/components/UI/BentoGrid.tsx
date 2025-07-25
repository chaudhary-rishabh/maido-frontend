import Image from "next/image";

export default function BentoGrid() {
    return (
        <div className="bg-gray-50 rounded-3xl py-10 sm:py-2">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-green-600">About Maido</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-xl font-semibold tracking-tight text-balance text-gray-950 sm:text-2xl">
                    Quick and fast and easy maid service
                </p>
                <div className="mt-4 grid gap-4 sm:mt-4 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Who are we
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Maido comes with very easy to use application and amazing user experience
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    With MAIDO your maid is just few clicks away
                                </p>
                            </div>
                            <div className="@container px-6 mt-4 sm:mt-10 rounded-3xl relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <Image className="mx-auto w-11/12 rounded-3xl" src="/maidoCareTaker5.png" alt="slider" height={400} width={200} />
                                <Image className="mx-auto w-11/12 mt-3 rounded-3xl" src="/maidoCareTaker3.png" alt="slider" height={400} width={200} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-9/12 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Why Maido</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Maido is multiple house service proider only in vadodara
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <Image className="mx-auto w-full bg-contain rounded-3xl" src="/maidoMaid11.png" alt="slider" height={100} width={100} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-9/12 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Subscription</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Maido is subscription based model for all your house needs, book any time without worrying.
                                </p>
                            </div>
                            <div className="@container flex flex-1 px-8 items-center max-lg:py-6 lg:pb-2">
                                <Image className="mx-auto w-full bg-contain rounded-2xl" src="/maidoCookMale.png" alt="slider" height={100} width={100} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Cleaning
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Fast cleaning services with maido
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <Image className="mx-auto mt-4 w-11/12 rounded-2xl" src="/maidoMaid13.png" alt="slider" height={200} width={200} />
                                    <Image className="mx-auto mt-4 w-11/12 rounded-2xl" src="/maidoUtensils1.png" alt="slider" height={200} width={200} />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
