const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Pega o codigo do caractere na tabela char

console.log(escola.substring(1))

console.log(escola.substring(0, 3)) // do Indice 0 até 3 caracteres

console.log('Escola '.concat(escola).concat("!")) // concatenação ou usar +

console.log(escola.replace(3, 'e'))

console.log('Ana, Maria,Pedro'.split(','))