#Node.js - modules

Node.js has its own module loading system.

You can specify which functions in your js file you want to be exported in one of two ways:

<ul>
either
  <li>assign each function you want to export to a module.exports.variablename</li>
or
  <li>prefix the functions you want to export with export.</li>
</ul>

In the js file that needs import the modules' functions, the exported module must be passed as an argument to Node's require() function.
The exported module must be prefixed with its relative path.
