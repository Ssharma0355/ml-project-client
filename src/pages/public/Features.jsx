import React from 'react';
import { Layers, Lock, Zap } from 'lucide-react';

const features = [
  {
    name: 'Real-time Orchestration',
    description: 'Manage your entire fleet of devices from a single pane of glass. Push updates over-the-air (OTA) with confidence using our rolling update strategies.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Replace with real UI screenshot
  },
  {
    name: 'Hardware-Level Security',
    description: 'We integrate directly with TPM modules to ensure that code running on your machines is verified and untouched. Secure boot made simple.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Instant Analytics',
    description: 'Visualize temperature, CPU usage, and custom metrics in real-time. Set up alerts to Slack or PagerDuty when thresholds are breached.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deep Dive</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to run production workloads.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20 lg:mt-24">
          {features.map((feature, featureIdx) => (
            <div key={feature.name} className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
              <div className={`lg:w-1/2 ${featureIdx % 2 === 1 ? 'lg:order-last' : ''}`}>
                 <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full rounded-xl shadow-xl ring-1 ring-slate-400/10"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">{feature.name}</h3>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {feature.description}
                </p>
                <ul className="mt-8 space-y-3 text-slate-600">
                    <li className="flex gap-2"><span className="text-indigo-600">•</span> Easy integration with existing stacks</li>
                    <li className="flex gap-2"><span className="text-indigo-600">•</span> 99.99% Uptime SLA guaranteed</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;