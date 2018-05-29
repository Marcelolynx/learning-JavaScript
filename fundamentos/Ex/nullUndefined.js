//Conceito de Null e Undefined

//Atribuição por referencia, ou seja aponta para o mesmo endereço de memória para uma ou mais variaveis
const a = {nome: 'teste'}

const b = a

console.log(b)

b.nome = 'epa!'
console.log(b)

console.log(a)

// Para tipos primitivos a atribuição é feita de cópia por valor 

let c = 3 // tipo primitivo é cópia por valor independentes entre as variaveis c e d 
let d = c

d++
console.log(d)


let valor 
console.log(valor)

// não tem endereço de memória
valor = 0
console.log(valor)
console.log(valor.toString)
// não é boa prática definir uma variavel como undefined para variaveis, no caso deve usar null para variaveis vazias

const produto = {}
console.log(!!produto.preco)
console.log(produto)

produto.preco = undefined // evitar usar undefined deixar a linguagem usar undefined, optar por null ou zero

produto.preco = 0 // sem preço
console.log(!!produto.preco)
console.log(produto)
