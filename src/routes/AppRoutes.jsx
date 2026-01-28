import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Layouts
import PublicLayout from '../components/layout/PublicLayout'
import DashboardLayout from '../components/layout/DashboardLayout'

// private routes
import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/private/Dashboard'
import Settings from '../pages/private/Settings'

// Public Routes
import Home from '../pages/public/Home'
import About from '../pages/public/About'
import Login from '../pages/public/Login'
import Pricings from '../pages/public/Pricings'
import Careers from '../pages/public/Careers'
import Services from '../pages/public/Services'
import Blog from '../pages/public/Blog'
import Features from '../pages/public/Features'
import Signup from '../pages/public/Signup'
import Terms from '../pages/public/Terms'
import Privacy from '../pages/public/Privacy'



const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path='/pricings' element={<Pricings />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/features' element={<Features />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />


        </Route>

        <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout/>}>
                <Route to="/dashboard" element={<Dashboard />} />
                <Route to="/setting" element={<Settings />} />
            </Route>
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes
