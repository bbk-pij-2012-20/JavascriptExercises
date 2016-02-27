<h4>web application with no client-side javascript</h4>

This exercise is to produce a simple web application, that allows the user to build 'multiple path stories'.

The exercise is to write the app without any client-side javascript.

Thus I am using express.js middleware, running on a node.js server,

All the code is written in javascript.

I am using EJS for the view templating engine.

(There is no requirement for persistence or further format styling of UI beyond a simple table grid and button format).

--

Judging by the demo video, one might model the story segments with a...

<ul>
  <li>tree data structure</li>
  <li>wherein the starting story page is a view of the central story segment, which is the root node</li>
  <li>and the 4 surrounding story segments are its four child nodes.</li>
  <li>Each child node, in turn, has its own four child nodes and so on..</li>
</ul>

I will assign each of the child nodes to variable names "west", "north", "east" and "south", making it clear its position in the grid format of the view relative to the central position of the parent node.
