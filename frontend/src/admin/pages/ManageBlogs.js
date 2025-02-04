// src/pages/ManageBlogs.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get('/blogs');
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle blog deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axiosInstance.delete(`/blogs/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id)); // Update the list of blogs after deletion
      } catch (error) {
        console.error('Error deleting blog', error);
      }
    }
  };

  // Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/admin/edit-blog/${id}`);
  };

  return (
    <>
    <div className="container mx-auto p-6">
       <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog._id}>
              <td className="py-2 px-4 border-b">{blog.title}</td>
              <td className="py-2 px-4 border-b">{blog.author}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(blog._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ManageBlogs;
