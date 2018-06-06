// funcao sem callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


const notasBaixasA = []
for (let i in notas) {
    if (notas[i] < 7)
    notasBaixasA.push(notas[i])
}

console.log(notasBaixasA)


// funcao com callback
const notasBaixasB = notas.filter(function (nota){
    return nota < 7 
})
console.log(notasBaixasB)

// funcao com callback + Arrow Function
const notasBaixasC = notas.filter(nota => nota < 7)
console.log(notasBaixasC)