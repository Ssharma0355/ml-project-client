import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Box } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper for consistent link styling
  const NavItem = ({ to, children }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Box size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              InduStruct
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/pricings">Pricing</NavItem>
            <NavItem to="/about">About</NavItem>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-6">
            <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
            <Link to="/services" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Services</Link>
            <Link to="/pricings" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Pricing</Link>
            <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">About</Link>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link to="/login" className="text-center font-medium text-slate-600">Log in</Link>
              <Link to="/signup" className="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;