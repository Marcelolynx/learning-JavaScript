class Pessoa {
    constructor(nome) {
        this.nome = nome
    }


    falar() {
        var nome = 'Marcelo'
        console.log(`Menu nome: ${this.nome}`)
    }
} 

const p1 = new Pessoa('Joao')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu Nome: ${nome}`)
    }
}

const p2 = criarPessoa('Joao')