// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getAllUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware'); // Import admin middleware


router.post('/register', registerUser);
router.post('/login', loginUser);
// Get all users
router.get('/', protect, admin, getAllUsers);

// Delete user by ID
router.delete('/:id', protect, admin, deleteUser);
module.exports = router;
