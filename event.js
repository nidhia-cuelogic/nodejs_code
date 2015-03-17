var http = require('http');

http.get(process.argv[2], function(response) {
	var resp = '';
	response.setEncoding('utf8')
    response.on('data', function(data) {
        resp += data;
    })
    .on('end', function(event) {
    	console.log(resp.length);
    	console.log(resp);
    });
});