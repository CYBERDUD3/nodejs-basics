var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
