// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })
const path = require('path')


// We're making our /build folder into our root
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'build'),
  prefix: '/', // optional: default '/'
})

// Lets serve those bundled files!
fastify.get('/', function (req, reply) {
  reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})



// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()