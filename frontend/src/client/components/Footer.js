import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-500 via-black to-green-200 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-wrap">
          
          {/* Brand Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Our Blog</h2>
            <p className="text-sm">
              Welcome to Our Blog, where we share interesting articles, tutorials, and the latest updates in technology, lifestyle, and more!
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-200 transition duration-300">Blogs</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="transform hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.464.099 2.796.144v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.311h3.592l-.468 3.622h-3.124V24h6.116C23.407 24 24 23.406 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="transform hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.79 9.79 0 01-2.828.775A4.918 4.918 0 0023.337 3.3c-.935.555-1.974.959-3.076 1.175a4.896 4.896 0 00-8.34 4.466A13.889 13.889 0 011.671 3.149a4.862 4.862 0 001.514 6.505 4.8 4.8 0 01-2.224-.614v.062a4.896 4.896 0 003.932 4.8 4.866 4.866 0 01-2.212.085 4.9 4.9 0 004.575 3.405 9.83 9.83 0 01-7.29 2.034 13.868 13.868 0 007.548 2.211c9.051 0 14.001-7.503 14.001-14.001 0-.214-.004-.425-.013-.635A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="transform hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.796.247 2.217.412a4.42 4.42 0 011.615.994 4.42 4.42 0 01.993 1.615c.165.421.357 1.048.412 2.217.058 1.267.069 1.647.069 4.851s-.012 3.584-.07 4.85c-.055 1.17-.247 1.796-.412 2.217a4.42 4.42 0 01-.994 1.615 4.42 4.42 0 01-1.615.993c-.421.165-1.048.357-2.217.412-1.267.058-1.647.069-4.851.069s-3.584-.012-4.85-.07c-1.17-.055-1.796-.247-2.217-.412a4.42 4.42 0 01-1.615-.994 4.42 4.42 0 01-.993-1.615c-.165-.421-.357-1.048-.412-2.217C2.175 15.585 2.163 15.205 2.163 12c0-3.204.012-3.584.07-4.85.055-1.17.247-1.796.412-2.217a4.42 4.42 0 01.994-1.615 4.42 4.42 0 011.615-.993c.421-.165 1.048-.357 2.217-.412C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.755 0 8.333.013 7.052.072 5.75.131 4.682.392 3.787.756a6.37 6.37 0 00-2.3 1.47A6.37 6.37 0 00.756 4.533c-.364.895-.625 1.963-.684 3.265C.013 8.333 0 8.755 0 12s.013 3.667.072 4.948c.059 1.302.32 2.37.684 3.265a6.37 6.37 0 001.47 2.3 6.37 6.37 0 002.3 1.47c.895.364 1.963.625 3.265.684C8.333 23.987 8.755 24 12 24s3.667-.013 4.948-.072c1.302-.059 2.37-.32 3.265-.684a6.37 6.37 0 002.3-1.47 6.37 6.37 0 001.47-2.3c.364-.895.625-1.963.684-3.265.059-1.281.072-1.703.072-4.948s-.013-3.667-.072-4.948c-.059-1.302-.32-2.37-.684-3.265a6.37 6.37 0 00-1.47-2.3 6.37 6.37 0 00-2.3-1.47C19.37.392 18.302.131 17 .072 15.667.013 15.245 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="transform hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.49C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.76V1.75C24 .78 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zm-1.77-13c-1.14 0-2.06-.93-2.06-2.08a2.06 2.06 0 114.12 0c0 1.15-.93 2.08-2.06 2.08zm15.3 13h-3.53v-5.59c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.69h-3.54V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.4v6.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Our Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
