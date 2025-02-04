import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
        console.log("working rana")
      try {
        const { data } = await axiosInstance.get('/blogs/recent'); // Add this route to your backend
        console.log(data)
        setRecentBlogs(data.slice(0, 3)); // Fetch only 3 recent blogs
      } catch (error) {
        console.error('Error fetching recent blogs:', error);
      }
    };
    fetchRecentBlogs();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentBlogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            {blog.image && <img src={`/uploads/blogs${blog.image}`} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-500 mb-4">{blog.content.substring(0, 100)}...</p>
            <Link to={`/blog/${blog._id}`} className="text-blue-500 font-bold">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
