var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Billionaire = mongoose.model('Billionaire');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/billionaire', function(req, res, next) {
  Billionaire.find(function(err, billionaire){
    if(err){ return next(err); }

    res.json(billionaire);
  });
});

module.exports = router;