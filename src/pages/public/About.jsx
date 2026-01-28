import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  Phone, 
  MapPin, 
  Code2, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

// IMPORT YOUR IMAGE HERE
import ceoImage from '../../assets/sachin-sharma.jpg'; 
// For now, I will use a placeholder you can replace:
// const ceoImage = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; 

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We build the future of industry.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              InduStruct was founded on the belief that industrial software should be as fast, beautiful, and intuitive as the consumer apps you use every day.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CEO / Leadership Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Leadership</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet the Founder
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Image Column */}
              <div className="lg:w-1/3 relative h-96 lg:h-auto">
                <img 
                  className="absolute inset-0 h-full w-full object-cover" 
                  src={ceoImage} 
                  alt="Sachin Sharma" 
                />
              </div>

              {/* Content Column */}
              <div className="lg:w-2/3 p-8 sm:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">Sachin Sharma</h3>
                    <p className="text-indigo-600 font-medium">Founder & CEO</p>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                    <a href="https://github.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                    <a href="mailto:ssharma0355@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
                    <a href="https://sachintech.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Globe size={20} /></a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={16}/> Bengaluru, Karnataka</span>
                  <span className="flex items-center gap-1"><Phone size={16}/> +91 9113704388</span>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-600">
                  A visionary Software Development Engineer transforming how industries approach digital infrastructure. With a background in building scalable microservices and modular UI architectures, Sachin leads the technical vision at InduStruct.
                </p>

                {/* Technical Skills Grid */}
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Code2 size={16} className="text-indigo-600"/> Core Competencies
                  </h4>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Frontend</span>
                      <p className="text-sm text-slate-700 mt-1">React.js, Next.js, Redux, Zustand, Tailwind CSS</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Backend & Cloud</span>
                      <p className="text-sm text-slate-700 mt-1">Python (FastAPI), GCP, Docker, CI/CD</p>
                    </div>
                  </div>
                </div>

                {/* Experience & History */}
                <div className="mt-8 border-t border-slate-100 pt-8">
                   <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
                    <Briefcase size={16} className="text-indigo-600"/> Professional Background
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <p className="font-semibold text-slate-900">Frontend Developer</p>
                        <span className="text-xs text-slate-500">06/2025 – Present</span>
                      </div>
                      <p className="text-sm text-slate-600">Slideoo AI (Affint.ai) • Bengaluru</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Reduced backend latency by 30% and improved code reuse by designing modular UI architectures with Next.js.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-baseline">
                        <p className="font-semibold text-slate-900">Frontend Developer</p>
                        <span className="text-xs text-slate-500">04/2024 – 06/2025</span>
                      </div>
                      <p className="text-sm text-slate-600">MyCLNQ Health • Singapore (Remote)</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Led the rebuild of a healthcare platform serving 1,000+ monthly active users, increasing mobile retention by 35%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                 <div className="mt-8 border-t border-slate-100 pt-8">
                   <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
                    <GraduationCap size={16} className="text-indigo-600"/> Education
                  </h4>
                  <div>
                    <p className="font-medium text-slate-900">B.Tech in Computer Science & Engineering</p>
                    <p className="text-sm text-slate-500">RGPV University, Bhopal (2019-2023)</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats / Social Proof (Optional Addition) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-slate-600">Transactions Processed</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">400k+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-slate-600">Uptime Guaranteed</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">99.9%</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-slate-600">New Users Annually</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">1,000+</dd>
            </div>
          </dl>
        </div>
      </section>

    </div>
  );
};

export default About;