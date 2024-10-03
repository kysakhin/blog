const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../schema/blog');
const cors = require('cors');

const router = express.Router();
router.use(cors());

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({}).select('category');
    res.send(blogs);
  } catch(err) {
    console.error(err);
  }
})

//router.get('/leetcode', async (req, res) => {
//  try {
//    const blogs = await Blog.find({ category: 'leetcode' }).select('id title');
//
//    if (blogs.length == 0)
//      return res.status(404).json({ message: 'No blogs found' })
//  res.send(blogs);
//  } catch(err) {
//    console.error(err);
//    res.send(500).json({ message: 'Internal server error' })
//  }
//});
//
//router.get('/webdevel', async(req, res) => {
//  try {
//    const blogs = await Blog.find({ category: 'webdevel' }).select('id title');
//
//    if (blogs.length == 0)
//      return res.status(404).json({ message: 'No blogs found' })
//    res.json(blogs.title);
//  } catch(err) {
//    console.log(err);
//    res.send(500).json({ message: 'Internal server error' })
//  }
//})

router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.find({ category: category }).select('id title');

    if (blogs.length == 0)
      return res.status(404).json({ message: 'No blogs found' })
  res.send(blogs);
  } catch(err) {
    console.error(err);
    res.send(500).json({ message: 'Internal server error' })
  }
})

module.exports = router;
