// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get(`/blogs?date=${filterDate}`);
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };
    fetchBlogs();
  }, [filterDate]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      <div className="mb-4">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border-2 border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
      <div key={blog._id} className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 rounded-lg shadow-md text-white">
      {blog.image && (
        <img
          src={`/uploads/blogs${blog.image}`}
          alt={blog.title}
          style={{ height: "350px" }}
          className="w-full h-72 object-contain rounded mb-4"
        />
      )}
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-200">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
      <p className="text-gray-300 mt-4">{blog.content.substring(0, 100)}...</p>
      <Link to={`/blog/${blog._id}`} className="text-white underline mt-4 inline-block">
        Read More
      </Link>
    </div>
    
       
        ))}
      </div>
    </div>
  );
};

export default Blog;
