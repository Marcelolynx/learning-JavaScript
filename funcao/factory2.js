function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.10
    }
}

console.log(criarProduto('Teclado Apple', 1000.00))