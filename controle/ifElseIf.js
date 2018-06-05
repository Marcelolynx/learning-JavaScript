Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperao')
    } else if (nota.entre(0, 4.99)) {
        console.log ('reprovado')
    } else {
        console.log('nota invalida')
    }

}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(7.9)
imprimirResultado(5.9)
imprimirResultado(-5.9)