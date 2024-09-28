const express = require('express');
const connectDB = require('./config/db.js')

const app = express();
const port = 5000;

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));
