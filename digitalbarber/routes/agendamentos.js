var express = require('express');
var router = express.Router();

var { renderizaListaAgendamento, renderizaCadastroAgendamento } = require('../controllers/agendamentos')

router.get('/', renderizaListaAgendamento);

router.get('/formulario', renderizaCadastroAgendamento);

module.exports = router;
