var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/clientes', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/clientes-novos', function(req, res, next) {
    res.send('respond with a resource');
  });
  
module.exports = router;
