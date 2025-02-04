import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AdminDrawer = ({isOpen, setIsOpen}) => {
  

  return (
   
      <div style={{minHeight:"100vh"}} className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
        <div className="flex items-center justify-center h-16 bg-gray-900 text-xl font-bold">
          Admin Panel
        </div>
        <nav className="flex flex-col p-4">
        <Link
            to="/"
            className="mb-4 text-lg hover:bg-gray-700 p-2 rounded"
            onClick={()=>{setIsOpen(false)}}
          >
           Home
          </Link>
          <Link
            to="/admin/blogs-manage"
            className="mb-4 text-lg hover:bg-gray-700 p-2 rounded"
            onClick={()=>{setIsOpen(false)}}
          >
            Manage Blogs
          </Link>
          <Link
            to="/admin/users"
            className="mb-4 text-lg hover:bg-gray-700 p-2 rounded"
            onClick={()=>{setIsOpen(false)}}
          >
            Manage Users
          </Link>
          <Link
            to="/admin/comments-manage"
            className="mb-4 text-lg hover:bg-gray-700 p-2 rounded"
            onClick={()=>{setIsOpen(false)}}
          >
            Manage Comments
          </Link>
          <Link
            to="/admin/blogs-create"
            className="mb-4 text-lg hover:bg-gray-700 p-2 rounded"
            onClick={()=>{setIsOpen(false)}}
          >
            Create Blog
          </Link>
        </nav>
      </div>

     
  );
};

export default AdminDrawer;
