// routes/blogRoutes.js
// routes/blogRoutes.js
const express = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog, likeBlog, comment, deleteComment,  recentBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware'); // Import admin middleware
const upload = require('../middleware/uploadMiddleware'); // Import multer middleware

const router = express.Router();

// Public routes
router.route('/')
  .get(getBlogs); // View all blogs publicly

// get recent  posts
router.route('/recent').get(recentBlog)
 
router.route('/:id')
  .get(getBlogById);
    

  // loged in user routes
  router.put('/:id/like', protect, likeBlog);

// Admin routes for blog management
router.route('/')
  .post(protect, admin, upload.single('image'), createBlog); // Admin create blog

router.route('/:id')
  .put(protect, admin, upload.single('image'), updateBlog) // Admin update blog
  .delete(protect, admin, deleteBlog); // Admin delete blog


// Add a comment to a blog
router.post('/:id/comment', protect, comment)
router.delete('/:blogId/comments/:commentId',protect, admin, deleteComment);

module.exports = router;
