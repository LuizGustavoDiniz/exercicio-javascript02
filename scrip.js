//logica muito simples pra converter real pra dolár


var carteira = Number(prompt('quanto de dinheiro voce quer converter'))

var conversao = carteira/5.77  // valor do dolar hoje 5.77

alert(`você converteu ${carteira.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} Reais \n em ${conversao.toLocaleString('en' , {style: 'currency', currency: 'USD'})} Dólares`)
