# Node.js Backend with MongoDB and Express.js
This project is a backend implementation using Node.js, MongoDB, and Express.js. It provides the server-side logic and APIs for interacting with a database.

## Getting Started
To get started with the Node.js backend, follow the instructions below:

## Prerequisites
Make sure you have the following software installed on your machine:

Node.js: Download and install Node.js if you haven't already.

## Installation
Clone the repository to your local machine using the following command:

### `git clone <repository-url>`

Install the required dependencies by running the following command:
### `npm install`

## Configuration
Create a .env file in the root directory and provide the necessary configurations, such as the MongoDB connection URL
### `DATABASEURL='mongodb+srv://<username>:<password>@todolist.w4z1rq4.mongodb.net/?retryWrites=true&w=majority'`

### `node index.js`
This will start the server on http://localhost:3001 unless otherwise specified in the .env file. 

Alternatively, for development purposes, you can use nodemon by running:
### `npm run devStart`
Nodemon will automatically restart the server whenever you save changes to the code.

You can now access the backend APIs to interact with the MongoDB database. Use tools like Postman or any other HTTP client to send requests to the server.

