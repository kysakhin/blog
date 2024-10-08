const express = require('express');
const connectDB = require('./config/db.js')
const multer = require('multer');
const path = require('path');
const Blog = require('./schema/blog.js')
const blogRouter = require('./routes/content')
const blogContentRouter = require('./routes/blogContent')

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use('/api', blogRouter);
app.use('/blog', blogContentRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage })

app.post('/upload', upload.single('file'), async(req,  res) => {
  try {
    const { title, category } = req.body;
    const contentFile = req.file.filename;
    const newBlog = new Blog({
      title: title,
      contentFile: contentFile,
      category: category
    })
    await newBlog.save();
    console.log(newBlog.contentFile);
    res.status(201).json({ message: 'Success' })
  } catch(err) {
    res.status(500).json({ message: 'Unsuccessful' })
    console.log(err);
  }
})

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));
