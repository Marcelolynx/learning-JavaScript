// Hoisting com Variaveis definidas com VAR

function teste() {
    return resposta = 2

    var resposta = 0 // Acontece Hoisting (Elevação) da declaração da Variavel para o topo, fazendo com que a atribuição seja valida usando declaração VAR
}

console.log(teste())


function teste2() {
    let resp = 0 // correto com Let
    return resp = 4

    // let resp = 0 // Declarando a variável com Let não acontece Hoisting causando erro se vc tentar atribuir valor a uma vriavel ainda nao declarada

   
}

console.log(teste2())