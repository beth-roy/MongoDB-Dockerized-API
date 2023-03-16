const { MongoClient } = require('mongodb');
const { ensureMongoContainerRunning } = require('../controllers/containers.controller');

const mongoHost = 'localhost';
const mongoDbName = 'db';
const mongoPort ='27017'

async function connectToMongoDb() {
    console.log(process.env.MONGO_PORT)
  const mongoUrl = `mongodb://admin:secret@${mongoHost}:${mongoPort}`;
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(mongoDbName);
  return db;
}

async function getUsers(req, res) {
  await ensureMongoContainerRunning();
  const db = await connectToMongoDb();
  console.log("di",db);
  const collections = await db.listCollections().toArray();
  console.log("col",collections)
  const usersCollection = collections.find(c => c.name === 'users');
  if (!usersCollection) {
    console.log('Collection "users" does not exist!');
    // create the "users" collection here if necessary
    db.createCollection("users")
  }
  console.log("gg")
  const users = await db.collection('users').find().toArray();
  console.log(users)
  res.json(users);
}

async function addUser(req, res) {
  console.log("post users",req.body)
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send('Invalid request payload');
    return;
  }

  await ensureMongoContainerRunning();
  const db = await connectToMongoDb();
  db.collection('users').insertOne({ username, password });
  res.json({"msg":"Data Saved"})
}

module.exports = { getUsers, addUser };
