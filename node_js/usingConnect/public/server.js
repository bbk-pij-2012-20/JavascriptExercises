var connect = require('connect');
var http = require('http');

//creating the core connect object - a dispatcher
//it's just a function that takes a request and response object
var app = connect();// its the request listener that createServer takes as argument

//connect is middleware.
//One of its uses is that it can stack the functions (hence you can specify a chain of function calls).

var doFirst = function(request, response, next) {

  console.log("this is the doFirst()...");
  next();

}

var doSecond = function(request, response, next) {

  console.log("this is the doSecond()...");
  next();

}

//app.use(doFirst);
//app.use(doSecond);

//Another use of connect is to handle a user request for a file path
//with the response of a function call.
var getSomePage = function(request, response) {

  console.log("use requested some page..");

}

var getSomeOtherPage = function(request, response) {

  console.log("use requested some other ..page..");

}
//hence, entering 'localhost:8888/somePage' in the address bar, calls getSomePage()
app.use('/somePage', getSomePage);
app.use('/someOtherPage', getSomeOtherPage);


http.createServer(app).listen(8888);
console.log("...server is running...");
