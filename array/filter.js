const anuncios = [
    {tipo: 'Casa', valor: 1250000.00, condominioFechado: true, lancamento: false},
    {tipo: 'Apartamento', valor: 750000.00, condominioFechado: true, lancamento: false},
    {tipo: 'Casa', valor: 1350000.00, condominioFechado: true, lancamento: true},
    {tipo: 'Casa', valor: 163000.00, condominioFechado: false, lancamento: false},
    {tipo: 'Apartamento', valor: 1280000.00, condominioFechado: true, lancamento: false}
]
console.log(anuncios.filter(function(anuncios){
    return false
}))


const lancamento = anuncio => anuncio.lancamento 

const caro = anuncio => anuncio.valor >=10000

const barato = anuncio => anuncio.valor <=10000



console.log(anuncios.filter(caro).filter(lancamento))