var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('index0', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


router.post('/contact', function(req, res, next) {
  // res.render('contact', { title: 'Express' });
  var a=req.body.txt1;
  var b=req.body.txt2;
  console.log("Textbox value is"+ a);
  const myarray = {
    myname: a,
    myage: b
  }

  res.render('home',{msg:myarray});

});

module.exports = router;
