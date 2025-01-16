const express = require('express');
const connectDB = require('./config/db.js')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Blog = require('./schema/blog.js')
const blogRouter = require('./routes/content')
const blogContentRouter = require('./routes/blogContent')

const app = express();
const port = process.env.PORT || 5000;

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// configure storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog-files',
    resource_type: 'raw'
  }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', blogRouter);
app.use('/blog', blogContentRouter);

app.post('/upload', upload.single('file'), async(req, res) => {
  try {
    const { title, category } = req.body;
    
    // req.file.path will have the cloudinary url
    const newBlog = new Blog({
      title: title,
      contentFile: req.file.path,
      category: category
    });

    await newBlog.save();
    res.status(201).json({ message: 'Success' });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Unsuccessful' });
  }
});

connectDB();
app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
