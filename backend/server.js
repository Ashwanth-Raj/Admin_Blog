// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

const app = express();

// Middleware
const corsOptions = {exposedHeaders:"Authorization"}
app.use(cors(corsOptions));
app.use(express.json());

   // Serve static files (uploaded images)
   app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    
  
    
 

// Routes
app.use('/api/users', userRoutes);
app.use("/api/blogs", blogRoutes)


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
