const express = require('express');
const Blog = require('../schema/blog');
const cors = require('cors');
const router = express.Router();

router.use(cors());

// Get all unique categories
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({}).distinct('category');
    res.status(200).json(blogs);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Get blogs by category
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.find({ category: category })
                          .select('id title createdAt')

    if (blogs.length === 0) {
      return res.status(404).json({ message: 'No blogs found in this category' });
    }

    res.status(200).json(blogs);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

module.exports = router;
