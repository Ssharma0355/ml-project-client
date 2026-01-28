import React from 'react';
import { Server, Shield, Globe, Cpu, Database, Activity } from 'lucide-react';

const servicesList = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable compute resources that grow with your industrial demands. Managed Kubernetes and Docker swarms.",
    icon: <Server className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Cybersecurity",
    description: "End-to-end encryption for IoT devices and industrial controllers. ISO 27001 compliant architecture.",
    icon: <Shield className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Global CDN",
    description: "Edge caching network spanning 200+ cities to ensure low-latency control for remote machinery.",
    icon: <Globe className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Edge Processing",
    description: "Process data locally on your hardware with our lightweight runtime environment.",
    icon: <Cpu className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Data Warehousing",
    description: "Petabyte-scale storage for logs, sensor data, and audit trails with instant query capabilities.",
    icon: <Database className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "System Monitoring",
    description: "Real-time observability into your entire stack. Predictive maintenance alerts via AI.",
    icon: <Activity className="h-6 w-6 text-indigo-600" />
  }
];

const Services = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">What We Do</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise-grade services for modern industry.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We handle the heavy lifting of infrastructure so your engineering team can focus on innovation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {servicesList.map((service) => (
              <div key={service.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    {service.icon}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;