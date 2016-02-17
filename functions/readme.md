Javascript functions
--
<p>functions in Javascript are called "first class citizens". In programming languages, first class citizens is used to describe types, objects, value, entities (Wikipedia). In practice, this means that it supports operations such as being passed as an argument, being returned from a function and being assigned to a variable.
All three of these operations can be performed with functions in Javascript. Hence, functions are objects,
functions can be returned from other functions (i.e. callbacks), functions can be assigned to variables. </p>
<ul>
<li><h4>hoisting</h4></li>

Roughly speaking, JS gets executed in the following order:
<ol><li>Parse the scope and detect all function definitions</li>
<li>Execute the code top-to-bottom with all functions found in step 1 available as variables</li></ul>
This behavior is called 'hoisting' because it is almost like the function definitions have been 'hoisted' up to the top of the function. However, if the function is associated with an assignment, then it will not be subject to hoisting. (Based on maxogden on Github).

(Based on Venkat talk:)
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

<li><h4>calling functions with the context object</h4></li>

In Javascript, every function has two things: 1. the arguments object (mentioned above), and 2. the variable 'this'.

'this' refers to the 'context object' and you can explicitly refer to a specific context object when calling a function by using either apply() or call().

<li><h4>callbacks</h4></li>

The Javascript runtime is single-threaded. Hence a Javascript engine like V8 has only one callstack.
A single-threaded language is susceptible to long delays, via blocking of the execution of subsequent code (particularly debilitating where a line of code is waiting on an I/O). However, web browsers surmount this problem, under the hood, with other threads which include the Web APIs (or C++ APIs in Node.js). The Web APIs makes use of event loops and callback queues. These other threads cannot be manipulated directly by the developer. The Javascript developer can only interact with them indirectly, using callbacks. As such, the mechanics of concurrency are essentially performed for you.
To enable a callback to occur, you pass the name of a function as a parameter to another function. If you do not want it to behave as a callback, you pass the name of a function with parentheses to the function (I'm not 100% sure about this though).

The WebAPI will then place the function in a task queue (this is the callback queue). When it observes the runtime callstack to be empty, the event loop kicks in and performs its role of taking the callback from the queue and putting it on the runtime engine callstack to be executed.
