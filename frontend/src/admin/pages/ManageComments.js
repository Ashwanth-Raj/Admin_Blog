/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const ManageComments = () => {
  const [commentsData, setCommentsData] = useState([]);

  // Fetch all blogs and comments
  const fetchComments = async () => {
    try {
      const { data } = await axiosInstance.get('/blogs');
      setCommentsData(data); // This assumes you're getting all blogs with their comments
    } catch (error) {
      console.error('Error fetching comments', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Delete a comment
  const handleDeleteComment = async (blogId, commentId) => {
    if(confirm("Are you sure you want to delete?")){
        try {
            await axiosInstance.delete(`/blogs/${blogId}/comments/${commentId}`);
            fetchComments(); // Refetch comments after deletion
          } catch (error) {
            console.error('Error deleting comment:', error);
          }
    }
   
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-6">Manage Comments</h1>
      
      {commentsData.length > 0 ? (
        commentsData.map(blog => (
          <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            {blog.comments.length > 0 ? (
              blog.comments.map(comment => (
                <div key={comment._id} className="bg-gray-100 p-3 rounded-lg mb-2 shadow-sm">
                  <p className="text-gray-700"><strong>User:</strong> {comment.user.username}</p>
                  <p className="text-gray-600">{comment.comment}</p>
                  <button
                    onClick={() => handleDeleteComment(blog._id, comment._id)}
                    className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete Comment
                  </button>
                </div>
              ))
            ) : (
              <p>No comments for this blog.</p>
            )}
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default ManageComments;
