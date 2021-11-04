var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Alteração de rota');
});

router.get('/rota-criada', function(req, res, next) {


  //controler 
  const valor1 = 20;
  const valor2 = 20;

  const resultado = valor1 * valor2

  // Aqui poderia chamar meus metodos de model para manipular o banco de dados .

  res.send('Will will will ' + resultado);
});

module.exports = router;
