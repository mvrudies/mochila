var express = require('express');
var router = express.Router();

var {rederizaCadastroCliente,rederizaListaCliente } = require('../controllers/clientes')

router.get('/', rederizaListaCliente);
router.get('/cadastro', rederizaCadastroCliente)

module.exports = router;
