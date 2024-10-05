require('dotenv').config();

const dburl = process.env.DATABASE_URL

// I tried to use mongodb module to connect and it worked but mongoose also worked. Feel free to use whatever you want
//
//const { MongoClient, ServerApiVersion } = require('mongodb');
//
//const uri = dburl;
//
//const client = new MongoClient(uri, {
//  serverApi: {
//    version: ServerApiVersion.v1,
//    strict: true,
//    deprecationErrors: true,
//  },
//});
//
//async function connectDB() {
//  try {
//    await client.connect();
//    await client.db("admin").command({ ping: 1 });
//    console.log("Pinged your deployment. You successfully connected to MongoDB!");
//  } catch (err) {
//    console.error('Database connection error:', err);
//  } finally {
//    // Ensure that the client will close when you finish/error
//    await client.close();
//  }
//}
//
//// Export the connectDB function
//module.exports = connectDB;

const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectDB = async () => {
  try {
    await mongoose.connect(dburl, options);
    console.log("Connected to DB");
  } catch(err) {
    console.error(err);
  }
};

module.exports = connectDB;
