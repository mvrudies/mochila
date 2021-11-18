const { response } = require("../app")

function trazerDados(req,res){
    //controler
    res.send('Ok, minha rota retornou isso ')
    //contreoler
    res.json([
        {
            id:153,
            nome:'alvaro',
            email:'alvaro@uol.com',
            password:"1234"
        },
        {
            id:154,
            nome:'Maria',
            email:'Maria@uol.com',
            password:"12345"
        }
    ])
}

function inserirDados(req,res){
    //controler
    //cadastrar no bando de dados 
    console.log(req.body)
    res.send('ok minha rota retornou isso ')


}

function alterardados(req, res){
    console.log(req.body)
    console.log(req.params)
    res.send('ROTA ALTERADA!')
}

function deletarDados(req,res){
    console.log(req.parems)
    res.send('REGISTRO DELETADO')
}

function uploadArquivo(req,res){
    res.send('Upload realizado')
}

module.exports={
    trazerDados,
    inserirDados,
    alterardados,
    deletarDados,
    uploadArquivo
}