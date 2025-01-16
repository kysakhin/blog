require('dotenv').config();

function getUrl() {
  const dburl = process.env.DATABASE_URL || "mongodb://localhost:27017/blog/";
  return dburl;
}

const dburl = getUrl();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("Connected to DB");
  } catch(err) {
    console.error(err);
  }
};

module.exports = connectDB;
