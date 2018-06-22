// Criando a propria versão do MAP utilizando callback ao Array.prototype
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // passando os 3 parametros do callback, elemento atual, o indice, e o  array original
    }

    return newArray
}
const carrinho = [
    '{"nome": "Piazza Boulevard", "preco": "160,000.00"}',
    '{"nome": "Piazza do Bosque", "preco": "220,000.00"}',
    '{"nome": "Piazza Boulevard", "preco": "260,000.00"}',
    '{"nome": "Piazza Boulevard", "preco": "190,000.00"}',
]

// Com OBJETO faremos a seleção apenas do PREÇO
const apenasPreco = produto => produto.preco

// primeiro precisa transformar um JSON em um OBJETO
const paraObjeto2 = json => JSON.parse(json) // Utlizando Arrow Function

// Utilizando função normal
const paraObjeto =  function(json) {
    return JSON.parse(json)
}

//let preco = carrinho.map2(paraObjeto2).map(apenasPreco)
let obj = carrinho.map2(paraObjeto)
console.log(obj)