import { CheckIcon } from '@heroicons/react/20/solid'

// Added sample tiers array with two plans
const tiers = [
    {
        name: 'Basic Plan',
        id: 'tier-basic',
        href: '#',
        priceMonthly: '₹499',
        description: "The perfect plan if you're just getting started with our product.",
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time'
        ],
        featured: false,
    },
    {
        name: 'Premium Plan',
        id: 'tier-premium',
        href: '#',
        priceMonthly: '₹999',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-green-600">Pricing</h2>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-lg">
                Become a member of Maido and get all services at anytime.
            </p>
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative border-2 bg-gradient-to-t from-yellow-200 via-green-200 to-gray-50 shadow-2xl p-6 rounded-3xl' : 'bg-gray-100/60 sm:mx-8  p-6 rounded-3xl lg:mx-0'
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-green-400' : 'text-green-600', 'text-base/7 font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className={classNames('font-bold text-gray-900')}>
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-800' : 'text-gray-800', 'text-base')}>/month</span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-800' : 'text-gray-900', 'mt-6 text-base/7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-800' : 'text-gray-900',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10'
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-green-400' : 'text-green-600', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-white text-green-400 rounded-3xl shadow-xs hover:bg-white focus-visible:outline-white'
                                    : 'text-green-400  ring-1 ring-green-200 rounded-3xl ring-inset hover:ring-green-300 focus-visible:outline-green-600',
                                'mt-8 border-2 border-green-400 block rounded-3xl px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 hover:bg-gray-50 focus-visible:outline-offset-2 sm:mt-10'
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}