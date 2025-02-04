import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import PrivateAdminRoute from './guard/PrivateAdminRoute';
import Home from './client/pages/Home';
import Blog from './client/pages/Blog';
import Login from './client/pages/Login';
import ClientLayout from './client/ClientLayout';
import BlogDetails from './client/pages/BlogDetails';
import Register from './client/pages/Register';

import AdminLayout from  './admin/AdminLayout';
import AdminPanel from './admin/pages/AdminPanel';
import ManageBlogs from './admin/pages/ManageBlogs';
import ManageUsers from './admin/pages/ManageUsers';
import CreateBlog from './admin/pages/CreateBlog';
import EditBlog from './admin/pages/EditBlogs'
import Logout from './client/pages/Logout';
import ManageComments from './admin/pages/ManageComments';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Client Section */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} /> {/* Home page */}
            <Route path="blogs" element={<Blog/>} /> {/* Blog post page */}
            <Route path="blog/:id" element={<BlogDetails />} /> Blog details page
            <Route path="login" element={<Login />} /> {/* Login page */}
            <Route path='logout' element={<Logout/>} />
            <Route path="register" element={<Register />} /> {/* Register page */}
          </Route>

          {/* Admin Section */}
          <Route element={<PrivateAdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<ManageBlogs />} /> {/* Admin dashboard */}
              <Route path="blogs-manage" element={<ManageBlogs />} /> {/* Manage blogs */}
              <Route path="blogs-create" element={<CreateBlog />} /> {/* Create blog */}
              <Route path="edit-blog/:id" element={<EditBlog />} /> {/* Edit blog */}

              <Route path='comments-manage' element={<ManageComments />} />
              <Route path="users" element={<ManageUsers />} /> {/* Manage users */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
