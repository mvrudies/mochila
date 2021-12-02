var express = require('express');
var router = express.Router();

var { retornaView } = require('../controllers/index')


router.get('/ retornaView-1',retornaView)

module.exports = router;
