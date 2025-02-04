// src/components/ClientLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ClientLayout = () => {
  return (
    <>
          <Navbar />
      <div className="container mx-auto mt-10  animate-gradient-move  rounded-lg shadow-lg">
  <Outlet /> {/* This will render the client child routes */}
</div>

<Footer/>
    </>
  );
};

export default ClientLayout;
