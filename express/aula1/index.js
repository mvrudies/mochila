
// Iniciação do express 
const express  = require('express')
const app = express()

app.get('/clientes', (req, res) => {  //O METODO GET GERALMENTE É USADO PARA RETORNAR INFORÇÕES
    console.log('bateu na rota de listar todos clientes')
    
    const todosOsClientes = [
        {
            id:01,
            nome:'Álvaro Ferreira',
            idade:26
        },
        {
            id:02,
            nome:'Patrick Reis',
            idade:32
        },
        {
            id:03,
            nome:'Marcos Lima',
            idade: 17
        }
    ]

    res.json(todosOsClientes)

})

app.post('/clientes',(req,res) => {    // O METODO POST É GERALMENTE USADO PARA INSERIR INFORMAÇÕES
    console.log('bateu na minha rota de post')
    res.json('REGISTRO CRIADO NO BANCO DE DADOS')
})


app.delete('/clientes', (req, res)=> { //O METODO DELETE É GERALMENTE USADO PARA DELETAR DADOS
    console.log('Bateu na rota de delete')

    res.json('Um registro foi apagado do banco de dados.')

})

app.put('/clientes',() =>{
    
})





app.listen(3333, () => {
    console.log('*** SERVIDOR INICIADO COM SUCESSO ***')
})