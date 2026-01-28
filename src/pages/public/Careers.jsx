import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const positions = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 2,
    role: 'Backend Systems Architect',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    id: 3,
    role: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
  },
];

const Careers = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Join our mission to revolutionize industrial software. We are looking for passionate individuals who love solving hard problems.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <ul role="list" className="divide-y divide-slate-100">
            {positions.map((position) => (
              <li key={position.id} className="group relative flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50 rounded-lg px-4 transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-6 text-slate-900 group-hover:text-indigo-600">
                    <a href="#">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {position.role}
                    </a>
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm leading-6 text-slate-500">
                    <span className="inline-flex items-center gap-1"><MapPin size={14}/> {position.location}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={14}/> {position.type}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">{position.department}</span>
                  </div>
                </div>
                <div className="flex-none self-start sm:self-center">
                   <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-sm font-semibold text-slate-900">Don't see your role?</h3>
            <p className="mt-1 text-sm text-slate-600">
                Email us at <a href="mailto:careers@industruct.com" className="text-indigo-600 hover:underline">careers@industruct.com</a>. We are always looking for talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;