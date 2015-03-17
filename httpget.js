var http = require('http');
var counter = 0;
var resp1 = resp2 = resp3 = '';

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
            resp1 += data;
        })
        .on('end', function(event) {
            counter++;
            printData();
        });
});

http.get(process.argv[3], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
            resp2 += data;
        })
        .on('end', function(event) {
            counter++;
            printData();
        });
});

http.get(process.argv[4], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
            resp3 += data;
        })
        .on('end', function(event) {
            counter++;
            printData();
        });
});

function printData() {
    if (counter == 3) {
        console.log(resp1);
        console.log(resp2);
        console.log(resp3);
    }
}
