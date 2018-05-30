const pessoa = {
    nome: 'Ana',
    idade: 23,
    endereco: {
        logradouro: 'Rua das Amélias',
        numero: 1010
    }
}

const { nome, idade } = pessoa
console.log( nome, idade )

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa não pode desestrturar um dado aninhado
//console.log(ag, num)