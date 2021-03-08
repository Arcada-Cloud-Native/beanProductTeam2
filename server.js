//server
const http = require('http');
const app = require('./app');

//port number
const port = process.env.PORT || 8080;

//Createserver
const server = http.createServer(app)

//Startar server
server.listen(port);