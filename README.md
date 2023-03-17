# MongoDB Express Application

This is a Node.js application with a MongoDB docker container that allows you to manually start and stop the database, as well as perform GET and POST requests to retrieve and save data.

## Prerequisites

Before starting with the installation and setup process, make sure that you have the following prerequisites installed on your system:

-   Node.js version 14 or later
-   Docker

## Installation

Follow these steps to install and set up the project:
#### Server Setup
1. Pull Mongo Image from Docker Hub `docker pull mongo`
2. Clone the repository: `git clone git@github.com:beth-roy/MongoDB-Dockerized-API.git`
3.  Navigate to the project directory: `cd server`
4.  Install the dependencies: `npm install`
5. Run `node index.js` to start the API endpoints

#### Client Setup
1. Navigate to the project directory: `cd client` from the base folder
2. Install the dependencies: `npm install`
3. Run the client using `npm start`

## Usage

### Start the MongoDB Container

To start the MongoDB container, send a GET request to the `/mongo/start` endpoint.

### Stop the MongoDB Container

To stop the MongoDB container, send a GET request to the `/mongo/stop` endpoint.

### Check the Status of the MongoDB Container

To check the status of the MongoDB container, send a GET request to the `/mongo/status` endpoint.

### Retrieve All Users

To retrieve all users from the users collection, send a GET request to the `/users/retrieve` endpoint.

### Add a New User

To add a new user to the users collection, send a POST request to the `/users/add` endpoint with a JSON payload in the following format:

```
{
"username":"diana",
"password":"password"
}
```

## Conclusion

With these steps, you should now have a Node.js API with a MongoDB database that allows you to start and stop the MongoDB container, check the status of the container, retrieve all users from the users collection, and add a new user to the collection. Please let me know if you have any questions or if you need further assistance.
