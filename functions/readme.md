Javascript functions
--
<ul>
<li><h4>hoisting</h4></li>

When a function is declared/defined with the syntax: function doSomething(){..},
it runs the risk of being overridden throughout the code (regardless of where the code is that calls
it) if there is another function definition with the same name. This is called "hoisting", and it should
be avoided because it is counter-intuitive and has no benefit.


In order to define the same function name differently on subsequent lines in a script without hoisting, you should
define the method with the following syntax instead: var doSomething = function() {..}, the
subsequent function can leave out the var: doSometing = function() {..}


It is possible to also write var doSomething = function doSomething() {..}, but there's no point
and the second doSomething is redundant.

<li><h4>number of arguments != numbers of parameters</h4></li>

In Javascript, you can pass any number of arguments to a function. The names of parameters declared in the function definition simply provides names for those arguments, which can then be referenced directly in the function body. However, the function can also reference any other arguments passed using the object arguments. Thus, if a function declares the names of two parameters, and if the function is called with more than 2 arguments, the function body can reference, for example, the third argument by using 'arguments[2]'.
