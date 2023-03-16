const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();
    router.post('/add', async (req, res) => {
        console.log("req.body",req.body)
        await usersController.addUser(req,res)
      });
      
      router.get('/retrieve', async (req, res) => {
        await usersController.getUsers(req,res)
      });

module.exports = router;
      
      
      

module.exports = router;




