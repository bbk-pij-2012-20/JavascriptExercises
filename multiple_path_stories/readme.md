<h4>Multiple path stories</h4>


This exercise is to reproduce the simple web application as viewable in
the demo video: (http://oneis-recruitment.s3.amazonaws.com/2014/stories-web-app.mp4)


The exercise is to write the app without any client-side javascript.

Thus I am using express.js middleware, running on a node.js server,

All the code is written in javascript.

I am using EJS for the view templating engine.
(There is no requirement for persistence or further format styling of UI.)

--

Judging by the demo video, one might model the story segments with a...

<ul>
  <li>tree data structure</li>
  <li>wherein the starting story page is a view of the central story segment, which is the root node</li>
  <li>and the 4 surrounding story segments are its four child nodes.</li>
  <li>Each child node, in turn, has its own four child nodes and so on..</li>
</ul>

I will assign each of the child nodes to variable names "west", "north", "east" and "south", making it clear its position in the grid format of the view relative to the central position of the parent node.
