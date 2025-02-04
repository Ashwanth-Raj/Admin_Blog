import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState('')
  const [isChecked,  setChecked]  = useState(false)

  // Check if user is authenticated (this can be from token stored in localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    let isAdmin = localStorage.getItem("isAdmin");
    if(token){
        setIsAuthenticated(true)
    }
   
    if(isAdmin ){
      isAdmin = JSON.parse(isAdmin)

      if(isAdmin===true){
        setIsAdmin(true)
      }
     
    }
 setChecked(true)
  }, []);

  // Function to login and save token

  // Function to logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("isAdmin")
    localStorage.removeItem('username')
    setIsAuthenticated(false);
    setIsAdmin(false)
    setUsername('')
  };

  const login = (isAdmin, username)=>{
    setIsAuthenticated(true);
    setIsAdmin(isAdmin);
    setUsername(username)
    

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated,isAdmin, login, logout,username }}>
      {children}
    </AuthContext.Provider>
  );
};
