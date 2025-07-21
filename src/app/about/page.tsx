import BentoGrid from "@/components/UI/BentoGrid";

const posts = [
    {
        id: 1,
        title: "Blink-Speed Maid Magic",
        href: "#",
        description:
            "Need a maid ASAP? Maido delivers spotless service in 30-60 minutes—chaos to calm, fast. Eco-friendly, tailored plans, and pay-later vibes for easy living.",
        datetime: "2023-03-16",
    },
    {
        id: 2,
        title: "Nanny, Cook, Caretaker—Instant Help",
        href: "#",
        description:
            "From nannies for quick childcare to cooks whipping up meals fast, caretakers for support, and all-rounders for everything—Maido’s services hit your door in a snap. Pay later, stress-free!",
        datetime: "2023-03-16",
    },
    {
        id: 3,
        title: "All-Rounder Vibes & Subscription Plans",
        href: "#",
        description:
            "Our all-rounders handle it all—cleaning, cooking, care. Plus, lock in savings with Maido’s subscription plans. Easy payments, pay later, Convenience at its best.",
        datetime: "2023-03-16",
    },
];

export default function page() {
    return (
        <div className="bg-white min-h-screen py-12 sm:py-16 lg:py-24">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Who We Are Section */}
                {/* <div className="mb-12 lg:mb-16 bg-gradient-to-t mt-6 from-white via-green-400/50 to-white rounded-3xl p-6 md:p-8 shadow-md shadow-gray-200/50">
                    <div className="text-center">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl font-poppins">
                            Who We Are
                        </h2>
                        <p className="mt-4 text-lg leading-7 text-gray-700 font-semibold">
                            We’re Maido, your ultimate squad for spotless homes and hassle-free living. Offering lightning-fast maid, nanny, cook, caretaker, and all-rounder services, we bring eco-friendly solutions, easy pay-later options, and subscription plans to fit your vibe. We’re all about quick, fun, and reliable home care.
                        </p>
                    </div>
                </div> */}
                <BentoGrid />
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col shadow-lg bg-gray-50 border-2 border-gray-200 backdrop-blur-md p-6 rounded-3xl max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="flex items-center gap-x-4 text-xs mb-4">
                                <time dateTime={post.datetime} className="text-gray-500 font-poppins">
                                    {post.datetime}
                                </time>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-2 text-lg font-semibold leading-6 text-green-600 font-poppins transition-colors duration-300">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 font-poppins">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}