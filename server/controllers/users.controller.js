const { MongoClient } = require('mongodb');
const { ensureMongoContainerRunning } = require('../controllers/containers.controller');

// Function to connect to the database
const connectToMongoDb = async () => {
  const mongoUrl = `mongodb://admin:secret@${process.env.mongoHost}:${process.env.mongoPort}/?directConnection=true`;
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
  console.log("Reachd here")

  await client.connect();
  console.log("Reachd next")

  const db = client.db(process.env.mongoDbName);
  return db;
}
//Function to get all user data from the database
const getUsers = async (req, res) => {
  await ensureMongoContainerRunning();
  const db = await connectToMongoDb();
  const collections = await db.listCollections().toArray();
  console.log(collections)
  const usersCollection = collections.find(c => c.name === 'users');
  if (!usersCollection) {
    console.log('Collection "users" does not exist!');
    db.createCollection("users")
  }

  const users = await db.collection('users').find().toArray();
  console.log(users)
  res.json(users);
}
//Function to add a new user
const addUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send('Invalid request payload');
    return;
  }
  await ensureMongoContainerRunning();
  const db = await connectToMongoDb();
  db.collection('users').insertOne({ username, password });
  res.json({ "msg": "Data Saved" })
}

module.exports = { getUsers, addUser };
