import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Scale your infrastructure with <span className="text-indigo-600">confidence</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The complete toolkit for modern engineering teams. Monitor, deploy, and manage your industrial systems from a single, intuitive dashboard.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/signup"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Free Trial
            </Link>
            <Link to="/about" className="group flex items-center text-sm font-semibold leading-6 text-slate-900">
              Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-white p-3 shadow-md ring-1 ring-slate-200">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">Lightning Fast</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">
                Deploy updates in milliseconds with our optimized edge network. Zero latency, maximum throughput.
              </p>
            </div>
             {/* Feature 2 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-white p-3 shadow-md ring-1 ring-slate-200">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">Enterprise Security</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">
                Bank-grade encryption by default. SOC2 compliant data handling to keep your proprietary data safe.
              </p>
            </div>
             {/* Feature 3 */}
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-white p-3 shadow-md ring-1 ring-slate-200">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">Real-time Analytics</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">
                Deep insights into your system performance. Visualize data flows and catch bottlenecks instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;