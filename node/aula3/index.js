// Escopo Geral -- Inicio 

let variavelNumero = 1.78 // number
let variavelText = 'texto' // text
let variavelBoleana = true // boleano true ou false 
let variavelObjeto = {   // variavel que tem subvarieveis dentro dela  // Object 
    nome:'Marcos', 
    idade: 30,
    masculino: true,
}

let variavelArray = ['Charles','Felipe', 'PEDRO', 'Gilmar'] // coleção  de dados 
let variavelindefinida //undefined
let variavelNull = null // nula 
let variavalNan = 2 + '32'// nan = ñ pode ser numero 

//console.log(typeof variavelArray)

//Métodos de array
let nomeDosAlunosDaDH = ['Álvaro','Patrick']

nomeDosAlunosDaDH.push('Marcos Lima','Gustavo Reis') // Push adiciona mais um item ao fim do Arry

nomeDosAlunosDaDH.pop() // remove o último item do array 

const posicaoMarcos = nomeDosAlunosDaDH.indexOf('Marcos Lima')

//console.log(posicaoMarcos)
//console.log(nomeDosAlunosDaDH)
//console.log(nomeDosAlunosDaDH[2])

//FUNÇÕES E ESCOPO
// escopo filho 
function imprimeResultadoArray(){
    // Este é o inicio do escopo da função
    console.log(nomeDosAlunosDaDH)
    // Este é o fim do escopo da função
}

function funcaoDois(){
    console.log(nomeDosAlunosDaDH)
}

imprimeResultadoArray()
funcaoDois()

// Escopo Geral -- FIM DO ESCOPO GERAL 