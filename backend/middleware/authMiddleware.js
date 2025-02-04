const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model

// Protect routes by checking token
const protect = async (req, res, next) => {
  let token;

  console.log("Authorization header",req.headers.authorization)
  // Check if the token exists and starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get the token from the 'Authorization' header
      token = req.headers.authorization.split(' ')[1]; // Token comes after 'Bearer'

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user data to the request object (without the password)
      req.user = await User.findById(decoded.id).select('-password');
     next()
    //   next(); // Move to the next middleware or route handler
    } catch (error) {
      console.error('Token verification failed', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
