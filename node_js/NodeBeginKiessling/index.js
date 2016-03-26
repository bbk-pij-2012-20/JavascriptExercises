var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.methodA;
handle["/methodA"] = requestHandlers.methodA;
handle["/methodB"] = requestHandlers.methodB;

server.start(router.route, handle);
