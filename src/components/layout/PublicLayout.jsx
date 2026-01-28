import React from 'react'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'

const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
