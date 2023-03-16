const Docker = require('dockerode');

const docker = new Docker();

async function startMongoContainer() {
  const container = await docker.createContainer({
    Image: 'mongo',
    name: 'mongo',
    Env: ['MONGO_INITDB_ROOT_USERNAME=admin', 'MONGO_INITDB_ROOT_PASSWORD=secret'],
    ExposedPorts: { '27017/tcp': {} },
    HostConfig: { PortBindings: { '27017/tcp': [{ HostPort: process.env.MONGO_PORT }] } },
  });

  await container.start();
}
async function containerStatus() {

const containers = await docker.listContainers({ all: true });
        console.log("yoo",containers)
        const mongoContainer = containers.find(
          (c) => c.Image === 'mongo',
        );
        return mongoContainer;
}
async function stopContainer() {

const container = docker.getContainer('mongo');
        await container.stop();
}

async function ensureMongoContainerRunning() {
  const containers = await docker.listContainers({ all: true });
  console.log("yoo",containers)
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
