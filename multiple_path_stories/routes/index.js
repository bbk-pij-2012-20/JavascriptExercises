var express = require('express');
var router = express.Router();
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

//app.get('/jquery/jquery.js', function(req, res) {
//    res.sendfile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
//});

/* GET home page. */
router.get('/', function(req, res, next) {
                    res.render('index', {
                      here: 'here is here!',
                      postingUserInput: ''
                });
});

module.exports = router;
