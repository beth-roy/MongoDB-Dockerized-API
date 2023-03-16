
const containerroutes = require('./routes/containers.route');
const usersroutes = require('./routes/users.route');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());
app.use('/mongo',containerroutes)
app.use('/users',usersroutes)
app.listen(3000, () => console.log('Server started on port 3000'));
