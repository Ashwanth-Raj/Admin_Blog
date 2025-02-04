// controllers/blogController.js
const Blog = require('../models/Blog');

// @desc    Get all blogs (with optional filters)
// @route   GET /api/blogs
exports.getBlogs = async (req, res) => {

  try {
    let filter = {};
    if (req.query.date) {
      filter.date = { $gte: new Date(req.query.date) }; // Filter by date
    }
    const blogs = await Blog.find(filter).sort({ date: -1 }).populate("comments.user");
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single blog by ID
// @route   GET /api/blogs/:id
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('comments.user');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new blog
// @route   POST /api/blogs
exports.createBlog = async (req, res) => {
    try {
      const { title, content } = req.body;
      const image = req.file ? `/${req.file.filename}` : ''; // Save image path if uploaded
  
      const newBlog = new Blog({
        title,
        content,
        image,
        author: req.user.username, // Use the logged-in user's name
      });
  
      const blog = await newBlog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
// @desc    Update a blog by ID
// @route   PUT /api/blogs/:id
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    const image = req.file ? `/${req.file.filename}` : ''; // Save image path if uploaded
  
    // Update fields
    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    blog.image = image || blog.image;
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a blog by ID
// @route   DELETE /api/blogs/:id
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    await Blog.findOneAndDelete({_id:req.params.id});
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.likeBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id; // Assuming user ID is available in req.user (from authMiddleware)

    const blog = await Blog.findById(blogId);
console.log("Blog", blog)
    // if (!blog) {
    //   return res.status(404).json({ message: 'Blog not found' });
    // }

    let likes = [];
    if(blog.likes){
      likes =  blog.likes;
    }
    // // Check if user already liked the blog
    if (likes.includes(userId)) {
     
      // User has already liked the blog, so remove the like (unlike)
      likes = likes.filter((id) => id.toString() !== userId.toString());
      console.log("User liked already",likes)
    } else {
      // Add userId to the likes array
      console.log("User didn't like")
      likes.push(userId);
    }

    // // await Blog.save();
    await Blog.findOneAndUpdate({_id:blogId},{$set:{ likes:likes}})

    res.status(200).json({ message: 'Blog like status updated', likes: likes.length });
    // res.status(200).json({message:"Success"})
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Add a comment to a blog
exports.comment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Add the new comment
    blog.comments.push({ user: req.user.id, comment });

    await blog.save();
    res.status(200).json({ message: 'Comment added successfully', comments: blog.comments });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// Delete a comment from a blog
exports.deleteComment = async (req, res) => {
  const { blogId, commentId } = req.params;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Filter out the comment to be deleted
    blog.comments = blog.comments.filter(comment => comment._id.toString() !== commentId);

    await blog.save();
    res.status(200).json({ message: 'Comment deleted successfully', comments: blog.comments });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


  exports.recentBlog = async (req, res) => {
  try {
    // const blogs = await Blog.find().sort({ date: -1 }).limit(3); // Get 3 most recent blogs
      const blogs = await Blog.find(); // Get 3 most recent blogs
    res.json(blogs);
  } catch (error) {
    console.log("errrer",error)
    res.status(500).json({ message: 'Error fetching recent blogs' });
  }
};
