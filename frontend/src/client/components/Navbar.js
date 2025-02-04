// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, isAdmin, username } = useContext(AuthContext);
  return (
    <nav className="bg-gradient-to-r from-gray-500 via-black to-green-200  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo or Brand */}
            <Link to="/" className="text-white font-bold text-2xl">
              MyBlog
            </Link>

            {/* Navbar Links (hidden on mobile) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
                {!isAuthenticated? <>
                  <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
                </>:
                  <Link
                  to="/logout"
                  className="text-red-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Log Out
                </Link>
                }
                {isAdmin &&
                 <Link
                 to="/admin"
                 className="text-white hover:bg-white-700 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
               >
                 Dashboard
               </Link> }
               {isAuthenticated && <h5 className='text-green-500 hover:text-green-100'>{username}</h5>}
              </div>
             
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for the menu (Hamburger icon) */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </Link>
          {!isAuthenticated? <>
                  <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                  Register
                </Link>
                </>:
                  <Link
                  to="/logout"
                  className="text-red-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                  Log Out
                </Link>
                }
                {isAdmin &&
                 <Link
                 to="/admin"
                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                 Dashboard
               </Link> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
