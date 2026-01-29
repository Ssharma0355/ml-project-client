import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API logic
    setTimeout(() => setIsLoading(false), 2000); 
  };

  return (
    // 1. Page Background (Gray)
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      
      {/* 2. Main Card Container (Split Layout) */}
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        
        {/* LEFT SIDE: The Form (Takes full width on mobile, half on desktop) */}
        <div className="w-full p-8 md:w-1/2 lg:p-12">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-slate-500">Sign in to your InduStruct account</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="mx-auto h-5 w-5 animate-spin"/> : "Sign in"}
            </button>
            
            <p className="text-center text-sm text-slate-500">
              No account? <Link to="/signup" className="font-semibold text-indigo-600 hover:underline">Sign up</Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE: The Video (Hidden on Mobile) */}
        <div className="hidden w-1/2 relative md:block">
          <div className="absolute inset-0 bg-indigo-900/30 z-10" /> {/* Blue Tint Overlay */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Replace with your video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-factory-conveyor-belt-package-distribution-32694-large.mp4" type="video/mp4" />
          </video>
          
          {/* Text Over Video */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-12 text-white">
            <h3 className="text-xl font-bold">Automate your workflow</h3>
            <p className="mt-2 text-sm text-indigo-100">Control your infrastructure from anywhere in the world.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;