var pratos = []
var precos = []
var carrinho = []
var valorFinal = []
var pf = 0



$(document).ready(function(){
    console.log("Carregado")
    $('#floatingInputTelphone').mask('(00) 00000-0000');
    
    coletarDados(".product-name", pratos)
    coletarDados(".product-price", precos)
    for(i in pratos){
        carrinho.push('0')
    }
});

function addItem(elemento, id){
    carrinho[id]++
    document.getElementById(elemento).innerText = carrinho[id]
}

function remItem(elemento, id){
    if(carrinho[id] == 0){
        return
    }
    carrinho[id]--
    document.getElementById(elemento).innerText = carrinho[id]


}

function coletarDados(classe, array){
    classe = $(classe)
    for(i in classe){
        if(typeof  classe[i].innerText === 'undefined'){

    }else{
        array.push(classe[i].innerText)
        }
    }
}

function somarCarrinho(){
    var name = document.getElementById("floatingInputName").value;
    pf = 0

    valorFinal = []
    for(i in precos){
        if(carrinho[i] != 0){
            var preco = parseFloat(precos[i].match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);
            pf += (carrinho[i]*preco)
            valorFinal.push(`Prato: ${pratos[i]} - Preço unitário: ${precos[i]} - Quantidade: ${carrinho[i]} - Total: R\$${preco*carrinho[i]},00.`)
    }
    }
    if(valorFinal[0] == null){
        $('#error').hide()
        document.getElementById("result-text").style.color = 'red';
        document.getElementById("result-text").innerHTML = `Selecione pelo menos um prato`
        return
    }else{
        $('#error').hide()
        document.getElementById("result-text").style.color = 'black';
        document.getElementById("rc").style.height = "500px"
        document.getElementById("result-text").innerHTML = `Caro <b>${name}</b><br><br>Seguem os dados do seu pedido<br><br>O seu pedido é:<br><ul>`
        for(i in valorFinal){
            document.getElementById('result-text').insertAdjacentHTML('beforeend', `<li>${valorFinal[i]}</li>`);
        }
        document.getElementById('result-text').insertAdjacentHTML('beforeend', `</ul><br><br><h3>Preço Final R$${pf},00`);
    }
}

 