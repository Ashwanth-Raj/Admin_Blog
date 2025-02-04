// src/pages/BlogForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Image state
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image); // Add image to formData
    }

    try {
      await axiosInstance.post('/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/blogs'); // Redirect to blog list after submission
    } catch (error) {
      console.error('Error creating blog', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a Blog</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded w-full"
            rows="10"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border-2 border-gray-300 rounded w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
