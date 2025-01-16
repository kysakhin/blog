const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const blog = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  contentFile: { type: String, required: true }, // this will store the cloudinary url
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('blog', blog);
module.exports = Blog;
