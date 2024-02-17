var express = require('express');
var router = express.Router();
var a = 0;
var list = [
  {
    "id": a++,
    "name": "khushi",
    "surname": "sahu",
    "age": "25",
    "url": "https://pngimg.com/uploads/deadpool/small/deadpool_PNG83.png"
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {

  list.push(req.body);
  const a = list.map((e) => {
    return e;
  })
  res.json(a);
});

router.get('/home', function (req, res, next) {

  const a = list.map((e) => {
    return e;
  })
  res.json(a)
});

router.get('/delete', function (req, res, next) {
  var removee = list.findIndex(item => item.id = list)
  if (removee !== -1) {
    list.splice(removee, 1);
  }

});



module.exports = router;
