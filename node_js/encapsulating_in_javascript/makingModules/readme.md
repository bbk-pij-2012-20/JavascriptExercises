#Node.js - modules

Node.js has its own module loading system.

In every js file you create, node generates a module.exports object, which is empty unless you specify otherwise. Thus, the unseen code is 'module.exports = {}'
You can specify which functions in your js file you want to be available for use in other js files in one of three ways:

either
<ul>
  <li>include the functions to export inside the module.exports object (and you can export other types of variables as well, not just functions)</li>
</ul>
or
<ul>
  <li>assign each function you want to export to 'module.exports.variablename'</li>
</ul>
or
<ul>
  <li>prefix the functions you want to export with 'export.''</li>
</ul>

Whichever other js file wishing to use those functions can do so with Node's require( ) function.  
The module in which the function(s) reside must be passed as an argument, prefixed with its relative path, to require( ).
