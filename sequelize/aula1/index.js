const axios = require('axios');

function aguardar (ms){
    if (typeof ms === 'number') {
        return new Promise(resolve => setTimeout(resolve, ms))
    } else {
        return Promise.reject('')
    }
}

// função de aguardar  


console.log('print 1')

console.log('print 2')

aguardar(5000)

    //contexto de sucesso 

    .then(() => {
        console.log ('A promessa acabou')
    ////....
})

    //contexto de falha 
    
    .catch(()=>{
    console.log('A promessa falhou')
    ///....
})

console.log('print 3')

//API Externa GIT HUB 

const githubAPI = axios.create({
    baseURL: "https://api.github.com"

})

githubAPI.get('users/mvrudies').then(resultado => {
    console.log('O resultado da requisição é :', resultado.data)

})