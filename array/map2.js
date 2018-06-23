// Transformar JSON em OBJETO  e depois utilizar MAP para mostar somente o preço de cada item

const carrinho = [
    '{"nome": "Piazza Boulevard", "preco": "160,000.00"}',
    '{"nome": "Piazza do Bosque", "preco": "220,000.00"}',
    '{"nome": "Piazza Boulevard", "preco": "260,000.00"}',
    '{"nome": "Piazza Boulevard", "preco": "190,000.00"}',
]

// primeiro precisa transformar um JSON em um OBJETO
const paraObjeto2 = json => JSON.parse(json) // Utlizando Arrow Function

// Utilizando função normal
const paraObjeto =  function(json) {
    return JSON.parse(json)
}


// Com OBJETO faremos a seleção apenas do PREÇO
const apenasPreco = produto => produto.preco

let preco = carrinho.map(paraObjeto2).map(apenasPreco)
let obj = carrinho.map(paraObjeto)
console.log(preco)
console.log(obj)