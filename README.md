# MongoDB-Dockerized-API
This is a simple server built with Node.js and Express that connects to a MongoDB database running in a Docker container. The API allows you to start, stop and check the status of the MongoDB container, as well as retrieve and create user data stored in a MongoDB collection named 'users'.
## Server Information
Yes, sure! Here's what you can add to the README.md file:

### Prerequisites
Before running this application, you must have the following software installed on your system:

Node.js
Docker
### Installation
To install the dependencies for this application, run the following command in your terminal:
npm install
This will install packages such as:
express
mongodb
dockerode

### Running the application
To start the server, run the following command:
node index.js
This will start the server on http://localhost:3000.

### API Endpoints
The following endpoints are available:

GET /mongo/start: Start the MongoDB container. \
GET /mongo/stop: Stop the MongoDB container. \
GET /mongo/status: Get the status of the MongoDB container. \
GET /users/retrieve: Get all users from the users collection in MongoDB. \
POST /users/add: Add a new user to the users collection in MongoDB. \
Note: The /mongo/start, /mongo/stop, and /mongo/status endpoints require Docker to be installed and running on your machine.