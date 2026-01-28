import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Developer',
    id: 'tier-developer',
    price: '$29',
    description: 'The essentials for individual developers and prototyping.',
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Community Support'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    price: '$99',
    description: 'A plan that scales with your rapidly growing business.',
    features: ['Unlimited Projects', '1TB Storage', 'Advanced Analytics', 'Priority Support', 'SSO Authentication'],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: ['Unlimited Storage', 'Custom SLAs', 'Dedicated Account Manager', 'On-premise Deployment', 'Audit Logs'],
    mostPopular: false,
  },
];

const Pricings = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Pricing that scales with you
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.mostPopular
                  ? 'bg-slate-900 text-white ring-slate-900 scale-105 shadow-xl z-10'
                  : 'bg-white text-slate-900 ring-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8">{tier.name}</h3>
                {tier.mostPopular && (
                  <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400 ring-1 ring-inset ring-indigo-500">Most popular</span>
                )}
              </div>
              <p className={`mt-4 text-sm leading-6 ${tier.mostPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-sm font-semibold leading-6">/month</span>}
              </p>
              <a
                href="#"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                }`}
              >
                Buy plan
              </a>
              <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${tier.mostPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-indigo-400' : 'text-indigo-600'}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricings;