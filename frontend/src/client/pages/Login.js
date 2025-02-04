// src/pages/Login.js
import React, { useContext, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import FlashMessage from '../../utils/FlashMessage';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('/users/login', { email, password });
      console.log('User logged in:', data);
      // Save token to localStorage and redirect to homepage or other protected page
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAdmin', data.isAdmin)
      localStorage.setItem('username', data.username)
      login(data.isAdmin, data.username)
      setMessage('User Logged In!');
      setType('success');
      if(data.token){
        navigate("/blogs")
      }
    } catch (error) {
      setMessage(error.response.data.message)
      setType('error')
      console.error('Login failed:', error.response.data.message);
    }
  };



  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  // FLASH MESSAGE

  const clearMessage = () => {
    setMessage('');
  };
  return (
    <div className="container mx-auto" style={{minHeight:"100vh"}}>
       {message && <FlashMessage message={message} type={type} onClose={clearMessage} />}
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
