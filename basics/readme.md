Javascript - the basics:
--
<ul>
<li><h4>Semi-colons:</h4></li>

Javascript will add in missing semi-colons at the end of a statement but will add a semi-colon prematurely if the statement is broken up and continued on the next line and if the latter part of the statement (on the next line) constitutes a complete statement by itself.

<li><h4>Local and global variables:</h4></li>

A variable that is declared inside a method will be local if it is preceded by a var, but global if it is declared without a var.

<li><h4>Type coercion:</h4></li>

Refers to the implicit type conversion which is done when using double equals, == (the coercion is done in Javascript at run-time).

The use of === does not allow coercion, instead comparing the data types and values as they are.

<li><h4>Object creation:</h4></li>

Objects in Javascript have a JSON format. As well as declaring attributes, you can also define the functions in object creation.

<li><h4>Class creation:</h4></li>

Class creation also has the same appearance as creating a function, except that the variable name must start with a capital letter. This is the constructor for the class.
You must then declare a variable and use the keyword 'new'. This has the effect of getting some memory and then passing it to the class as its context object.

<li><h4>Dynamically-typed:</h4></li>

Refers to the point at which type-checking is performed. A dynamically-typed language like Javascript does the type-checking at run-time. (This is in contrast to statically-typed languages (like C) which do all their type-checking at compile-time.)
A dynamically-typed language like Javascript is also sometimes described as being 'untyped'. Untyped essentially means that the language only has one type (it tags values at runtime and has different behaviour based on the tags). It also means that the language does not have any static types.

<li><h4>Weakly-typed:</h4></li>

Is a poorly-defined description of how strictly a language permits type conversions. Javascript is relatively weakly-typed, as is C, while Haskell and Java are strongly-typed.
