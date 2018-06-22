// função em JS é First-Class Object {Citizens}
//Higher-order function

//criar de forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function () { }

//Armazenar uma função em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0][2, 3])

// Armazenar em um atributo de Objeto
const obj = { }
obj.falar = function ( ) { return 'opa'}
console.log(obj.falar())

// Passar função como parameto
function run(run) {
    run()
}

run(function () { console.log('Executando...') })