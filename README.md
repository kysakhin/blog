# WORK IN PROGRESS

# Blog application
This is a small little project where I want to be able to write blogs without actually modifying my code. Basically having authentication only to myself and having permissions to modify my database that I shall be using for this project. This is only just mostly testing. Deploying will be on a different repository. 
So whenever I learn something new, I have my own login to this and I can write my blog which will be visible to others.

## Installation and setting up

```shell
git clone https://github.com/kysakhin/blog.git
```
and then
```shell
npm i 
cd backend && npm i 
cd ../client && npm i
```

## Configuring
For security reasons I am not sharing my MongoDB configuration options. It is setup with MongoDB Atlas, which is a cloud based DB management service. If you want to run it locally, then install MongoDB and MongoDB Compass and set it up. Instructions can be found [here](https://www.mongodb.com/docs/manual/installation/)

After that, go to your `./backend/config/` and make a new file called `db.js` and insert this code into it 
considering installation for MongoDB went smoothly, and you have not changed any default configuration, 
```javascript
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017', {});
        console.log('Connected to DB');
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}
```
And also make a new folder called `uploads` in the `backend` directory. In future updates I shall automate that.

## Running
In the root directory, run
```shell
npm start
```
