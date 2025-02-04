import React, { useContext } from 'react';
import {  Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateAdminRoute = () => {
  const { isAuthenticated,isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (isAuthenticated && !isAdmin) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

 

  return <Outlet />
};

export default PrivateAdminRoute;
