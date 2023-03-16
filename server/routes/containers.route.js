const express = require('express');
const dockerController = require('../controllers/containers.controller');
const router = express.Router();
    router.get('/start', async (req, res) => {
        console.log("gg")
        await dockerController.ensureMongoContainerRunning();
        res.send('Mongo container started!');
      });
      
      router.get('/stop', async (req, res) => {
        await dockerController.stopContainer();
        res.send('Mongo container stopped!');
      });
      
      router.get('/status', async (req, res) => {
        const mongoContainer =await dockerController.containerStatus();
        res.json({"state":mongoContainer.State});
      });
      

module.exports = router;




