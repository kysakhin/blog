const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

// checking if folder for uploads exists
const check = path.join(__dirname, "../uploads/");
if (!fs.existsSync(check)) {
  console.log('Created a new uploads folder');
  fs.mkdirSync(check, { recursive: true });
}

const blog = new mongoose.Schema({
  id: {type: String, default: uuidv4 },
  title: { type: String, required: true },
  contentFile: {
    type: String, 
    required: true,
    get: (filepath) => path.join(__dirname, "../uploads/", filepath)
  },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

blog.set('toJSON', { getters: true })

const Blog = mongoose.model('blog', blog);

module.exports = Blog;
