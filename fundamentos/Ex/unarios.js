let num1 = 1
let num2 = 2
let num3 = 3 
let num4 = 4

num1++ // pós fixada
console.log(num1)

--num1 // pré fixada com precendencia a comparação
console.log(num1)


console.log(++num1 === num2--) // true porque ele atribui a num1 que passa a valer 2 antes da comparação, após a comparação é decrementado de num2 que passa a valer 1
console.log(num1)
console.log(num2)

console.log(num3++ === --num4)  //  true
console.log(num3)
console.log(num4)
