
const containerroutes = require('./routes/containers.route');
const usersroutes = require('./routes/users.route');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());
app.use('/mongo', containerroutes)
app.use('/users', usersroutes)
app.listen(8000, () => console.log('Server started on port 8000'));
