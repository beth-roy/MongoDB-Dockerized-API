const Docker = require('dockerode');
const docker = new Docker();

//Function to start a container
const startMongoContainer = async () =>{
  const container = await docker.createContainer({
    Image: 'mongo',
    name: 'mongo',
    Env: ['MONGO_INITDB_ROOT_USERNAME=admin', 'MONGO_INITDB_ROOT_PASSWORD=secret'],
    ExposedPorts: { '27017/tcp': {} },
    HostConfig: { PortBindings: { '27017/tcp': [{ HostPort: process.env.MONGO_PORT }] } },
  });

  await container.start();
}

//Function to check status of a container
const containerStatus =  async () =>{
const containers = await docker.listContainers({ all: true });
        const mongoContainer = containers.find(
          (c) => c.Image === 'mongo',
        );
        return mongoContainer;
}

//Function to stop a container
const stopContainer =async () => {
    const container = docker.getContainer('mongo');
    await container.stop();
}

//Function to check if container isn't started trigger a start
const ensureMongoContainerRunning = async () => {
  const containers = await docker.listContainers({ all: true });
  const mongoContainer = containers.find(
    (c) => c.Image === 'mongo',
  );
  if (!mongoContainer) {
    await startMongoContainer();
    console.log('Mongo container started!');
  } else if (mongoContainer.State === 'exited') {
    const container = docker.getContainer('mongo');
    await container.start();
    console.log('Mongo container restarted!');
  } else if (mongoContainer.State === 'running') {
    console.log('Mongo container already running!');
  }
}

module.exports = { ensureMongoContainerRunning,stopContainer, containerStatus };
