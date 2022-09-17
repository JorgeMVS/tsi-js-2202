let meuTitulo = document.getElementById('titulo');
meuTitulo.style.color='red';

let btnCalcular = document.getElementById('calcular');
btnCalcular.style.background='lightgray';


btnCalcular.addEventListener('click',function (evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');


    let preco = calculaPreco(serv.value,prazo.value);

    res.innerHTML=`o preço é ${preco}`;

    console.log(serv.value);
    console.log(prazo.value);
   

});

function calculaPreco(servico,prazo){

    let tabela =[
    
        ["$$$","$$","$"],
        ["$$$$","$$$","$$"],
        ["Não faz","Não faz","$"]
    
    ];

    return tabela[servico][prazo];
;}


