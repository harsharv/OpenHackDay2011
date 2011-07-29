/* Include the necessary modules. */

var http      = require('http');
var url       = require('url');
var operation = require('./pow');

http.createServer(function (req, res) {

        /* In case of any error, the server should not crash. */
        process.addListener('uncaughtException', function (err) {
            console.log('Caught exception: ' + err);
            res.writeHead(500, 'text/plain');
            res.end('Error encountered!');
        });

        /* Look at the URL to figure out the operation. */
        var urlParsed = url.parse(req.url, true);
        var path = urlParsed.pathname;

        /* Look at the query parameters passed*/
        var query = urlParsed.query;
        
        /* If parameters are not passed, then return 400 */
        if(query.a == undefined || query.b == undefined) {
            res.writeHead(400, 'text/plain');
            res.end('Pass parameters a & b');
        }
        
        /* add, sub, div, mul operations. */
        switch(path) {
            case '/add'   : res.writeHead(200, 'text/plain');
                            res.end(parseInt(query.a, 10) + parseInt(query.b, 10) + "");
                            break;
            case '/sub'   : res.writeHead(200, 'text/plain');
                            res.end(parseInt(query.a, 10) - parseInt(query.b, 10) + "");
                            break;
            case '/mul'   : res.writeHead(200, 'text/plain');
                            res.end(parseInt(query.a, 10) * parseInt(query.b, 10) + "");
                            break;
            case '/div'   : res.writeHead(200, 'text/plain');
                            res.end(parseInt(query.a, 10) / parseInt(query.b, 10) + "");
                            break;
            case '/pow'   : res.writeHead(200, 'text/plain');
                            res.end(operation.pow(parseInt(query.a, 10), parseInt(query.b, 10)) + "");
                            break;
        };

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');
