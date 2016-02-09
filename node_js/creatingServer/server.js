var http = require('http');

//user trying to connect, causes this function to fire
function onRequest(request, response) {

  console.log("user made a request" + request.url);
  response.writeHead(200, {"Context-Type":"text/plain"});//the code for success and the type of data it will put out
  response.write("here is some data");//the data it puts out to the webpage
  response.end();

}

//listening on port 8888 for a user to connect. 
http.createServer(onRequest).listen(8888);
console.log("server is running..");
