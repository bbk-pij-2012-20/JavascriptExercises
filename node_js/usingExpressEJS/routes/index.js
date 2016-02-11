var express = require('express');
var router = express.Router();
var practiceJson = require('../jsonPracticeData2.json');// ../ means move up a directory
var queryStringFood = "videos_food.php?cat=";
/* GET home page. */
//what this does is get index.ejs and pass in the value given with the javascript variable 'title'

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Shahin',
    pracJson: practiceJson,
    queryStrFood: queryStringFood
  });
});

module.exports = router;
