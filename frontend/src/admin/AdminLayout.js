// src/components/AdminLayout.js
import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminDrawer from './components/AdminDrawer';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for open/close

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(false);


  

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
    {/* Drawer Toggle Button for Mobile */}
    <button
      className="text-2xl p-4 md:hidden"
      onClick={toggleDrawer}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
    <AdminDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
   
    <div className="flex-1 p-6">
        {/* Placeholder for admin page content */}
        <h1 className="text-3xl font-bold">Admin Panel Content</h1>
       
       <Outlet />
      </div>
  </div>
  );
};

export default AdminLayout;
