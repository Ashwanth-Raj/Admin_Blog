import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { AuthContext } from '../../context/AuthContext';

const BlogDetails = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { id } = useParams(); // Get blog id from the URL
  const [blog, setBlog] = useState(null); // State for blog data
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState(''); // State for new comment input
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Fetch blog details by id
  const fetchBlogDetails = async () => {
    try {
      const { data } = await axiosInstance.get(`/blogs/${id}`);
      setBlog(data);
      setComments(data.comments);
      setLikes(data.likes.length);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post(`/blogs/${id}/comment`, { comment: newComment });
     fetchBlogDetails();
     setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Handle like/unlike functionality
  const handleLike = async () => {
    try {
      const { data } = await axiosInstance.put(`/blogs/${id}/like`, {});
      setLikes(data.likes.length);
      fetchBlogDetails(); // Fetch updated details
    } catch (error) {
      console.error('Error liking/unliking blog:', error);
    }
  };

  return (
    <>
      {blog ? (
        <div className="container mx-auto p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
          {/* Blog details */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out rounded-lg p-6">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            {blog.image && (
              <img
                src={`/uploads/blogs${blog.image}`}
                alt={blog.title}
                style={{ height: '350px' }}
                className="w-full h-72 object-contain rounded mb-4"
              />
            )}
            <p className="text-gray-500 mb-2">
              By {blog.author} on {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-7 mb-4">{blog.content}</p>

            {/* Like button */}
            <div className="flex items-center mb-4">
              <button
                onClick={handleLike}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Like
              </button>
              <span className="ml-3 text-gray-600">
                {likes} {likes === 1 ? 'Like' : 'Likes'}
              </span>
            </div>
          </div>

          {/* Comments section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <p className="text-sm text-gray-500">User: {comment.user.username}</p>
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-white">No comments yet. Be the first to comment!</p>
              )}
            </div>

            {/* Comment Form (only for logged-in users) */}
            {isAuthenticated ? (
              <form onSubmit={handleCommentSubmit} className="mt-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-gray-300"
                  placeholder="Write your comment here..."
                  required
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Submit Comment
                </button>
              </form>
            ) : (
              <p className="mt-4 text-red-500">Please log in to comment.</p>
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-white">No data is available</h1>
      )}
    </>
  );
};

export default BlogDetails;
