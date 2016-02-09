var http = require('http');
var fs = require('fs');

//404 response
var send404Response = function(response) {

  response.writeHead(404, {"Context-Type" : "text/plain"});
  response.write("error 404 : page not found");
  response.end();

}

//handle user request
var onRequest = function(request, response) {

  if(request.method == 'GET' && request.url == '/') {

    response.writeHead(200, {"Context-Type":"text/html"});
    var stream = fs.createReadStream("./index.html").pipe(response);
//this error handling esque code below doesn't seem to really work
    stream.on('error', function (error) {

      console.log("Caught", error);

    });

    stream.on('readable', function () {

      stream.read();

    });

  } else {

    send404Response(response);

  }

}

http.createServer(onRequest).listen(8888);
console.log("server is running on localhost:8888...");
