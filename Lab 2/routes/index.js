var express = require('express');
var router = express.Router();

// rotute defiend to navigate from one page to another page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,sample:'shubham'});
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Ronaldo', function(req, res, next) {
  res.render('Ronaldo', { title: 'Ronaldo' });
});

router.get('/Bruce', function(req, res, next) {
  res.render('Bruce', { title: 'Bruce' });
});

router.get('/LeBron', function(req, res, next) {
  res.render('LeBron', { title: 'LeBron' });
});
router.get('/Malik', function(req, res, next) {
  res.render('Malik', { title: 'Malik' });
});

//exported this route config and registered into app.js
module.exports = router;

