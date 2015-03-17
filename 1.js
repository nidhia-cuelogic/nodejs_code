var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response) {
    var rs = fs.createReadStream(process.argv[3]);
    response.writeHead(200);
    rs.pipe(response);
    inStream.pipe(map(function(chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(outStream);
}).listen(process.argv[2] || 8080);