var querystring = require("querystring");

var methodA = function(response, postData) {

  console.log("Request handler 'methodA' was called.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/methodB" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {"Content-type":"text/html"});
  response.write(body);
  response.end();

}

var methodB = function(response, postData) {

  console.log("Request handler 'methodB' was called");
  response.writeHead(200, {"Content-type":"text/plain"});
  response.write("you sent the text: " + querystring.parse(postData).text);
  response.end();

}

exports.methodA = methodA;
exports.methodB = methodB;
