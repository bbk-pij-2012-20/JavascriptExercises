Basics of Javascript:
--

<h3>Semi-colons:</h3>

Javascript will add in missing semi-colons at the end of a statement but will add a semi-colon prematurely if the statement is broken up and continued on the next line and if the latter part of the statement (on the next line) constitutes a complete statement by itself.

<h3>Local and global variables:</h3>

A variable that is declared inside a method will be local if it is preceded by a var, but global if it is declared without a var.

<h3>Type coercion:</h3>

Refers to the implicit type conversion which is done when using double equals, == (the coercion is done in Javascript at run-time).

The use of === does not allow coercion, instead comparing the data types and values as they are.

<h3>Object creation:</h3>

Objects in Javascript have a JSON format. As well as declaring attributes, you can also define the functions in object creation.

<h3>Class creation:</h3>

Class creation also has the same appearance as creating a function, except that the variable name must start with a capital letter. This is the constructor for the class.
You must then declare a variable and use the keyword 'new'. This has the effect of getting some memory and then passing it to the class as its context object.

<h3>Dynamically-typed:</h3>

Refers to the point at which type-checking is performed. A dynamically-typed language like Javascript does the type-checking at run-time. (This is in contrast to statically-typed languages (like C) which do all their type-checking at compile-time.)
A dynamically-typed language like Javascript is also sometimes described as being 'untyped'. Untyped essentially means that the language only has one type (it tags values at runtime and has different behaviour based on the tags). It also means that the language does not have any static types.

<h3>Weakly-typed:</h3>

Is a poorly-defined description of how strictly a language permits type conversions. Javascript is relatively weakly-typed, as is C, while Haskell and Java are strongly-typed.
