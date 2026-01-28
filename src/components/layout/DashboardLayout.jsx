import React from 'react'
import Sidebar from '../navigation/Sidebar'
import {Outlet} from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar />
        <main>
            <Outlet />
        </main>
      
    </div>
  )
}

export default DashboardLayout
