var numero = 1 // Aqui é Global

{
    var numero = 2  //Aqui também é Global e a variavel numero passa a valer 2
    console.log('dentro = ', numero)
}

console.log('fora ', numero) // Aqui ela vai continuar sendo 2 porque foi alterada dentro do bloco e por ser Global ela mudou o valor

// Fuja do Scopo Global em JavaScript no Browser principalmente

function eAgora() {
    inteiro = 3
    console.log(inteiro)
}

eAgora()
console.log(numero)
console.log(numero)

{
    var inteiro = 5
    console.log(inteiro)
}
eAgora()
console.log(inteiro)