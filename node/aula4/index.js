// OBJETOS

const pessoa = { 
    nome: 'Álvaro',
    cpf : '123.456.789-00',
    idade: 32,
    casado : false, 
    falar : function(){
        console.log('Estou falando')
    }
}

//console.log(pessoa.falar())

const animal = {
    raca: 'cachoro',
    nome: 'code',
    peso: 20.5,
    cor: 'caramelo',
    comer: function(){
        console.log('Animal comendo')
    }
}

//animal.comer()



//JSON -> PRIMO POBRE
const informacoesEmJson = '{"nome" : "Ávaro", "idade": 26}'

const jsonCovertido =  JSON.parse(informacoesEmJson)

console.log(jsonCovertido)



//MÉTODOS DE STRING (TEXTO)
const meuNome = 'Marcos Lima'

// length - MOSTRA O TAMANHO DO COMPRIMENTO DA STING
console.log(meuNome.length)

//index.Of - enconta uma informação dentro da string
console.log(meuNome.indexOf('Marcos'))



//LOOPS E REPETIÇÕES 

// Loop que irá imprimir do 1 a 100

 for (c = 0; c <= 100; c ++) {
     console.log('Repetiu '+ c +' vezes')
  
 }

// IF TERNARIO 

 if (1 == 1){
     console.log('Certo')
 }else{
     console.log('Errado')
 }

 1 == 1 ? console.log('Correto') : console.log('Incorreto')

// ARROW  FUNTION 

function nomeDaFuncao(){
    console.log('Entrou na Função')
}

nomeDaFuncao()

const nomeDaFuncao2 = () => {
    console.log('Entrou na segunda função')
}

nomeDaFuncao2()