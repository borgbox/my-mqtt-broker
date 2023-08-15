const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883; // MQTT default port

server.listen(port, function() {
    console.log(`Aedes MQTT broker listening on port ${port}`);
});