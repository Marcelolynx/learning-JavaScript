{
    {
        {
            { var sera = 'Será' }  // é acessivel de fora do bloco 
        }
    }
}

console.log(sera)  // Aqui por exemplo, a variavel só fica no scopo limitado dentro de uma função

// Exemplo de var dentro da função

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(teste.local)