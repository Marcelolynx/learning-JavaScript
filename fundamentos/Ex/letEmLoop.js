const funcs = []

// Var não tem Scopo de Função
for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

const  funcs2 = []

// Var não tem Scopo de Função
for (let i = 0; i < 10; i++) {
    funcs2.push(function(){
        console.log(i)
    })
}

funcs2[2]()
funcs2[8]()