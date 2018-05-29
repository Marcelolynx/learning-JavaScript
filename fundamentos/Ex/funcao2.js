// Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
} 

imprimirSoma(2, 3)

// Amazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))


// Retorno implicito
const subtracao = (a, b) => a - b  // Funcao em uma unica linha em que seu retorno será o resultado da operação
console.log(subtracao(2, 3))