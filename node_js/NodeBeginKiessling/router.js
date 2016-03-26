var route = function(handle, pathname, response, postData) {

  console.log("about to route a request for: " + pathname);

  if (typeof handle[pathname] === 'function') {

    handle[pathname](response, postData);

  } else {

    console.log("no request handler found for: " + pathname);
    response.writeHead(404, {"Content-type" : "text/plain"});
    response.write("404 Not found");
    response.end();

  }

}

exports.route = route;