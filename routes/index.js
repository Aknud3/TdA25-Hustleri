var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HelloTda' });
});

res.send(<html><body>Hello TdA</body></html>)

module.exports = router;
