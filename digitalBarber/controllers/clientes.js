const Cliente = require("../models/Cliente")

function renderizaListaCliente(req, res, next) {
    res.render('listagemCliente')
}

function renderizaCadastroCliente(req, res, next) {
    res.render('formularioCliente')
}

async function controllerTesteSequelize(req, res, next) {

    // Método da model para criar um registro
    // const resultadoDoCreate = await Cliente.create({
    //     nome: 'Cliente teste',
    //     email: 'teste@gmail.com',
    //     telefone: '3833212011'
    // })

    //Método da model para deletar um ou mais registros
//    const resultadoDoDelete = await Cliente.destroy({
//        where: {
//            nome: 'Cliente teste'
//        }
//    })


    const retornoDoCreate = await Cliente.create({
        nome : 'Cliente22',
        telefone:'1198989898',
        email: 'clientes@sad.com',
        create_at:  new Date(),
        updated_at: new Date()
    })


    const listagemDosClientes = await Cliente.findAll()

    res.send(listagemDosClientes)
}

module.exports = {
    renderizaListaCliente,
    renderizaCadastroCliente,
    controllerTesteSequelize
}