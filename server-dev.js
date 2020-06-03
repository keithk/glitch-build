const fs = require("fs");
const {
  pause,
  proxyParcelHMR,
  wrap,
} = require("./utils/hmr");

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });
const path = require("path");

// Create our server
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "build"),
  prefix: "/"
});

fastify.register(proxyParcelHMR);

// And set up our root path, that pulls from /build
fastify.get("/", function(req, reply) {
  reply.sendFile("index.html");
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
