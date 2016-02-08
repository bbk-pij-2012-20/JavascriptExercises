#Node.js - modules

Node.js has its own module loading system.

You can specify which functions in your js file you want to be available for use in other js files in one of two ways:

either
<ul>
  <li>assign each function you want to export to 'module.exports.variablename'</li>
</ul>
or
<ul>
  <li>prefix the functions you want to export with 'export.''</li>
</ul>

Whichever other js file wishing to use those functions can do so with Node's require( ) function.
The module in which the function(s) reside must be passed as argument, prefixed with its relative path, to require( ).
