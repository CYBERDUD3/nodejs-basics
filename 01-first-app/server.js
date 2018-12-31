var http = require('http');

function onRequest(request, response){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}
http.createServer(onRequest).listen(8080);

// Terminal will print this message
console.log('Server running at http://127.0.0.1:8080/');
