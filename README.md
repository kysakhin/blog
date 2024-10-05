# Blog application
This is a small little project where I want to be able to write blogs without actually modifying my code. Basically having authentication only to myself and having permissions to modify my database that I shall be using for this project. This is only just mostly testing. Deploying will be on a different repository. 
So whenever I learn something new, I have my own login to this and I can write my blog which will be visible to others.

## Dependencies 
This project requires:
- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm comes bundled with Node.js. You can check if you have it by running `npm -v` in your terminal.

## Installation and setting up

Clone the repository:
```shell
git clone https://github.com/kysakhin/blog.git
```
and then install the dependencies,
```shell
npm i 
cd backend && npm i 
cd ../client && npm i
```

## Configuring

### Local MongoDB
If you are using MongoDB on your localhost, then you can skip this step

### MongoDB Atlas
If you are using cloud MongoDB, i.e, MongoDB Atlas, then you'll have one extra step.
Create a new file called `.env` in your backend folder. Put your MongoDB connection string to that. 
```
DATABASE_URL = ''
```

## Running
In the root directory, run
```shell
npm start
```
