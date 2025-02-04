// src/pages/Register.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import FlashMessage from '../../utils/FlashMessage';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('/users/register', { username, email, password });
      console.log('User registered:', data);
      // Save token to localStorage and redirect to login
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAdmin',data.isAdmin)
      localStorage.setItem("username", data.username)
      login(data.isAdmin, data.username)
      setMessage('User Registered!');
      setType('success');
    } catch (error) {
    setMessage(error.response.data.message);
    setType('error');
      console.error('Registration failed:', error.response.data.message);
    }
  };



  const [message, setMessage] = useState('');
  const [type, setType] = useState('');


  // FLASH MESSAGE
  

  const clearMessage = () => {
    setMessage('');
  };
  return (
    <div className="container mx-auto " style={{minHeight:'100vh'}}>
      {message && <FlashMessage message={message} type={type} onClose={clearMessage} />}
      
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
