var express = require('express');
var router = express.Router();
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);



$('#0x1 button').click(function () {
        alert("hi there");
        return false;
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {

//    title: 'Express'
});

});

module.exports = router;
