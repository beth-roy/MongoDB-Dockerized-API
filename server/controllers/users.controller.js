const { MongoClient } = require('mongodb');
const { ensureMongoContainerRunning } = require('../controllers/containers.controller');


const connectToMongoDb = async ()=> {
  const mongoUrl = `mongodb://admin:secret@${process.env.mongoHost}:${process.env.mongoPort}`;
  const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(process.env.mongoDbName);
  return db;
}

const getUsers = async(req, res) =>{
  await ensureMongoContainerRunning();
  const db = await connectToMongoDb();
  const collections = await db.listCollections().toArray();
  
  const usersCollection = collections.find(c => c.name === 'users');
  if (!usersCollection) {
    console.log('Collection "users" does not exist!');
    db.createCollection("users")
  }
  
  const users = await db.collection('users').find().toArray();
  console.log(users)
  res.json(users);
}

 const addUser = async (req, res)  => {
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
