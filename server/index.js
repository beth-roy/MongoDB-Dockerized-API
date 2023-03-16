const express = require('express');
const app = express();
const containerroutes = require('./routes/containers.route');
const usersroutes = require('./routes/users.route');
app.use(express.json());
app.use('/mongo',containerroutes)
app.use('/users',usersroutes)
app.listen(3000, () => console.log('Server started on port 3000'));
