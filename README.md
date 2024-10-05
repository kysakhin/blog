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
In your backend directory, create a new file called `.env` and add environmental variables for your database connection
If your MongoDB is running locally, create a new collection called blog, and put this code:
```
DATABASE_URL='mongodb://localhost:27017/blog/'
```

If you are using cloud MongoDB, that is, MongoDB Atlas, then put the connection uri instead of this. The connection string should also include your password for your user.

And also make a new folder called `uploads` in the `backend` directory. In future updates I shall automate that.

## Running
In the root directory, run
```shell
npm start
```
