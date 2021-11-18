var express = require('express');
var router = express.Router();
var {trazerDados,inserirDados,alterardados,deletarDados} = require('../controllers/users')




router.get('/', trazerDados);

router.post('/inserir', inserirDados);

router.put('/alterar/:id', alterardados);

router.delete('/deletar/:id' ,deletarDados);

module.exports = router;
