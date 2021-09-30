// // variavel de controle, condição,incremento(ação)
for (let i=0; i <= 1; i++) {
    console.log('entrou' + i )

}

// function nomeFuncao(parametro1, paremetro2){
//     console.log(parametro1 + paremetro2)

// }
// nomeFuncao('olá',' Mundo')

let nomeFuncao = (parametro1,parametro2) =>{
        console.log(parametro1 + parametro2)
}

nomeFuncao('Olá ', 'Mundo')



//Callbeck

let pegaNome = (nome) => {
    return nome
}

let saudar = (nome, callback) => {
    const saudacao = 'Olá' + callback(nome)
    return saudacao
} 
const resultado = saudar('Álvaro ',pegaNome)
console.log(resultado)


// METODOS DE ARRAY

let nomes = ['José','Joaquina','Marcelo','Creuza','Ozeias','Abedenego']


let novoArray = nomes.map((nome)=>{  // função dentro do metodo
   return 'Olá  ' + nome
})

let retornoFind = nomes.find((nome)=>{  // função dentro do metodo
   return nome === 'José'
 })

nomes.forEach((nome) => {   // função dentro do metodo
   console.log(nome)
  })


for (nome of nomes){
    console.log(nome)
} 

//DATE

const dataAgora = new Date();

console.log(dataAgora.getMonth())