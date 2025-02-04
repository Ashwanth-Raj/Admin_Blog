import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; // In case you want to link to other pages
import axiosInstance from '../../utils/axiosInstance';

const ManageUsers = () => {
  const [users, setUsers] = useState([]); // State to store user list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const { data } = await axiosInstance.get('/users');
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching users.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    try {
      await axiosInstance.delete(`/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId)); // Remove the deleted user from the list
    } catch (error) {
      setError('Error deleting user.');
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Manage Users</h1>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6">
        {users.length > 0 ? (
          <table className="min-w-full bg-gray-500 shadow-lg rounded-lg">
            <thead className="bg-black">
              <tr>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Admin</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-700">
                  <td className="py-3 px-6">{user.username}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.isAdmin ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-6 text-right">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
