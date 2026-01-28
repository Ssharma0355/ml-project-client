import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <Box className="h-6 w-6 text-indigo-500" />
              <span className="text-lg font-bold">InduStruct</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Building the next generation of industrial software tools for developers and engineers.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-sm hover:text-white">Features</Link></li>
              <li><Link to="/pricings" className="text-sm hover:text-white">Pricing</Link></li>
              {/* <li><Link to="/dashboard" className="text-sm hover:text-white">Dashboard</Link></li> */}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white">About</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} InduStruct Inc. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 