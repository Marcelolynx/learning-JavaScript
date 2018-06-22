const nums = [1, 2, 3, 4, 5]

// For com propósito (MAP) - usando o map ele cria um novo array modificado
let resultado = nums.map(function(e) {
    return e * 2
})


console.log(resultado)
console.log(nums)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

