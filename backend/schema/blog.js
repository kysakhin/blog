const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const blog = new mongoose.Schema({
  id: uuidv4(),
  content: String,
  date: String
});

const Blogs = mongoose.model('blogs', blog);

module.exports = Blogs;
