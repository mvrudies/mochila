const listaClientes = () => {
    axios.get('http://localhost:3000/clientes')
        .then(retorno => {
            const dados = retorno.data
            let listaClientes = document.querySelector('#listaClientes')

            for (let i = 0; i < dados.length; i++) {
                listaClientes.innerHTML += `<p> ${dados[i].nome}, ${dados[i].telefone}, ${dados[i].email} </p>`
            }            
        })
}


listaClientes()