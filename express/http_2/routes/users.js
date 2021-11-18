var express = require('express');
var router = express.Router();
var {trazerDados,inserirDados,alterardados,deletarDados,uploadArquivo} = require('../controllers/users')


// alterações para o funciomento do Multer 
const multer = require('multer')
const upload = multer({dest:'uploads/'})





router.get('/', trazerDados);

router.post('/inserir', inserirDados);

router.put('/alterar/:id', alterardados);

router.delete('/deletar/:id',deletarDados);

router.post('/upload-one/', upload.single('arquivo',2),uploadArquivo);

router.post('/upload-tow/', upload.array('arquivo',3),uploadArquivo);


module.exports = router;
