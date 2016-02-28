Javascript - the basics:
--
<ol>
<li><h4>semi-colons:</h4></li>

Javascript will add in missing semi-colons at the end of a statement but will add a semi-colon prematurely if the statement is broken up and continued on the next line and if the latter part of the statement (on the next line) constitutes a complete statement by itself.

<li><h4>importing external JS files:</h4></li>

It is strongly advised to keep javascript code out of the html, for both maintenance and performance reasons. Hence, it is important to know how to reference your external javacript code from the html.

The reference is given via the 'src' attribute of script tags (there is always a start tag, an end tag and nothing in between). The 'type' attribute is no longer needed.

It is better to make the reference at the end of the body section (rather than in the head or at the start of the body), i.e. after the DOM has been loaded otherwise it can slow the time take for the page to load, an undesirable user experience.

<li><h4>local and global variables:</h4></li>

A variable that is declared inside a method will be local if it is preceded by a var, but global if it is declared without a var.

<li><h4>lexical scoping:</h4></li>

In the scenario of duplicate variable names, with one declared variable in the global scope and the other in the local scope of a function, the use of the var keyword affects which variable is being read and written to.

<li><h4>type coercion:</h4></li>

Refers to the implicit type conversion which is done when using double equals, == (the coercion is done in Javascript at run-time).

The use of === does not allow coercion, instead comparing the data types and values as they are.

<li><h4>object creation:</h4></li>

Objects in Javascript have a JSON format. As well as declaring attributes, you can also define the functions in object creation.

<li><h4>class creation:</h4></li>

Class creation also has the same appearance as creating a function, except that the variable name must start with a capital letter. This is the constructor for the class.
You must then declare a variable and use the keyword 'new'. This has the effect of getting some memory and then passing it to the class as its context object.

<li><h4>dynamically-typed:</h4></li>

Refers to the point at which type-checking is performed. A dynamically-typed language like Javascript does the type-checking at run-time. (This is in contrast to statically-typed languages (like C) which do all their type-checking at compile-time.)
A dynamically-typed language like Javascript is also sometimes described as being 'untyped'. Untyped essentially means that the language only has one type (it tags values at runtime and has different behaviour based on the tags). It also means that the language does not have any static types.

<h4>weakly-typed:</h4>

Is a poorly-defined description of how strictly a language permits type conversions. Javascript is relatively weakly-typed, as is C, while Haskell and Java are strongly-typed.

<li><h4>context:</h4></li>

Every javascript file has a context object. The context object is Window by default but changes for properties and objects that are defined within an object. In that scenario, the context object of these is the object in which they are defined.</br>
The context can be explicitly changed by use of the functions apply(), call() and bind(). These are predefined javascript functions that any javascript functions will automatically have available to it. The context object of choice is passed as the first parameter.
