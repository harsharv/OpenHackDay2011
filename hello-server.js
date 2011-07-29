/* Include the http module. */
var http = require('http');

/* Create a server which accepts Request - req and returns Response - res */
http.createServer(function (req, res) {
        /* Set the HTTP header for the response. */
        res.writeHead(200, {'Content-Type': 'text/plain'});

        /* End the HTTP response */
        res.end('Hello World\n');
}).listen(9000, "127.0.0.1");

/* Print a message to indicate that the server is running. */
console.log('Server running at http://127.0.0.1:9000/');
