#Node.js

Node.js is 2 things:

<ul>
 <li>a runtime environment (using Google's V8 virtual machine - same as that running in Chrome)</li>
 <li>a javascript library</li>
</ul>


"..Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient..." https://nodejs.org/en/

"..As an asynchronous event driven framework, Node.js is designed to build scalable network applications..." https://nodejs.org/en/about/

NodeBeginKiessling
--
The folder labelled 'NodeBeginKiessling' is code based on the book 'The Node Beginner Book' by Manuel Kiessling, published 03Apr15.
It covers Node.js (without Express.js), helping to explain how one might build and modularise a web application from scratch.
Hence: the main file 'index.js', the server, router and requesthandlers files, and how the main file bootstraps these together, with some dependency injection. It also shows how to avoid blocking operations.


creatingServer, ..makingModules, usingConnect, usingExpressEJS
--
The code written in the 4 directories ('creatingServer', '..makingModules', 'usingConnect', 'usingExpressEJS') is based on the youtube tutorial for beginners by 'The New Boston' made up of 22 short videos, published 30Mar15
https://thenewboston.com/videos.php
These videos provide an introduction to the basics of the Javascript language that are important for Node.js (including asynchronous callbacks, the context object, exporting & requiring modules, etc) as well as an introduction to the basic use of Connect.js, Express.js and the view template engine called EJS.

Connect.js
--
"..is an extensible HTTP server framework for node, providing high performance "plugins" known as middleware."
"..is a simple framework to glue together various "middleware" to handle requests." https://github.com/senchalabs/connect

Express.js
--
"Fast, unopinionated, minimalist web framework for Node.js"
"..is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." http://expressjs.com/

Embedded Javascript templates (EJS)
--
"EJS is a client-side templating language that was originally part of JavaScriptMVC..." http://www.embeddedjs.com/
