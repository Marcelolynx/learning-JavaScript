console.log(7 / 0)

console.log("10.0" / 2) // bizarro! mas funfa

console.log("Show!" * 2) // gera erro NaN

console.log('3' + 2) // não soma e sim concatena

console.log('3' - 2 ) // subtrai pois no mundo da String o sinal de subtração só serve para operar a mesma

console.log(0.1 + 0.7)
 /* Especificação do I3E Standart Binary Flouting Point Aritmatic,
  causa imprecisão por ser mais rapida */

  // console.log(10.toString()) // não roda
  console.log((10.3432).toFixed(2)) // roda!