const valores = [
    1, 'Marcelo', 1.2, 9.2,  
]

console.log(valores[0], valores[1])
console.log(valores.length)
valores.push(1.4)
console.log(valores)

console.log(valores.pop())

console.log(valores)

console.log(typeof valores) // Array em JavaScript é do tipo Object
// ao tentar acessar uma posição do array que não existe o retorno será "undefined"