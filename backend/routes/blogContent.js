const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../schema/blog');
const cors = require('cors');
const fs = require('fs');

const router = express.Router();
router.use(cors());

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const path = await Blog.findOne({id: id }).select('contentFile');
    fs.readFile(path.contentFile, 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: 'trouble reading file' })
      }
    res.status(200).send(data);
    })
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: "Server issue" })
  }
})

module.exports = router;
