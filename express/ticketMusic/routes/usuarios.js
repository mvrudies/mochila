var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usuarios');
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastroUsuario');
});

module.exports = router;
