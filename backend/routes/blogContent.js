const express = require('express');
const axios = require('axios');
const Blog = require('../schema/blog');
const cors = require('cors');
const router = express.Router();

router.use(cors());

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ id: id });
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Fetch the content from Cloudinary URL
    const response = await axios.get(blog.contentFile);
    const content = response.data;
    
    res.status(200).send(content);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: "Server issue" });
  }
});

module.exports = router;
