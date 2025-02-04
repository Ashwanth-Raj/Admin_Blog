import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext); // Get logout function from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function to clear authentication
    navigate('/login'); // Redirect the user to the login page after logout
  };

  useEffect(()=>{
handleLogout()
  },[])
  return (
    <div className="p-4">
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
