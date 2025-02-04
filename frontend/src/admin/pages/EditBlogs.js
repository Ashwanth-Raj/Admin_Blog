// src/pages/EditBlog.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // File input
  const [existingImage, setExistingImage] = useState(''); // Existing image URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axiosInstance.get(`/blogs/${id}`);
        setTitle(data.title);
        setContent(data.content);
        console.log(data.image, "image")
        setExistingImage(data.image); // Set existing image
      } catch (error) {
        console.error('Error fetching blog details', error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image); // New image upload
    } else {
      formData.append('image', existingImage); // Keep existing image
    }

    try {
      await axiosInstance.put(`/blogs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin/blogs-manage'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating blog', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
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
            rows="6"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
          <input type="file" onChange={handleImageChange} />
          {existingImage && (
            <img src={`/uploads/blogs${existingImage}`} alt="Blog" className="w-32 h-32 mt-2" />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
