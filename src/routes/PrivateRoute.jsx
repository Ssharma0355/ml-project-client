import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth=()=>{
    const user = localStorage.getItem("user");
    return user? true: false
}

const PrivateRoute = () => {
    const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={"/login"} replace />
}

export default PrivateRoute
