function rederizaListaCliente(req,res,next){
    res.render('listagemClientes')
}
function rederizaCadastroCliente(req,res,next){
    res.render('formularioCliente')
}

module.exports ={
        rederizaListaCliente,
        rederizaCadastroCliente
}