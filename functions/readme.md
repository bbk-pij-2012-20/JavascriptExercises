Javascript functions
--
<ul>
<li><h4>hoisting</h4></li>

When a function is declared/defined with the syntax: function doSomething(){..},
it runs the risk of being overriden throughout the code (regardless of where the code is that calls
it) if there is another function definition with the same name. This is called "hoisting", and it should
be avoided because it is counter-intuitive and has no benefit.


In order to define the same function name differently on subsequent lines in a script without hoisting, you should
define the method with the following syntax instead: var doSomething = function() {..}, the
subsequent function can leave out the var: doSometing = function() {..}


It is possible to also write var doSomething = function doSomething() {..}, but there's no point
and the second doSomething is redundant.

<li><h4>number of arguments != numbers of parameters</h4></li>

..