/*Criar uma calculadora de valor a ser cobrado do cliente
O valor do serviço pode variar conforme o prrazo
os valores e prazos devem ser armazenado em uma matriz o calculo deve ser obrigatoriamente em uma função*/

let tabela =[
    
    ["$$$","$$","$"],
    ["$$$$","$$$","$$"],
    ["--","--","$"]

];

let serviço = prompt("Entre com o serviço \n 0 - Troca de óleo, \n 1-Balanceamneto \n 2-Cambage");

let prazo = prompt("Entre com o prazo \n 0 - Um dia, \n 1- Dois dias \n 2- Três dias");

if(validaEntrada(serviço) && validaEntrada(prazo))
{
alert("O serviço ficará em:  " + tabela[serviço][prazo])
}

else
{
    alert("ERROR")
}

function validaEntrada (dadoUsuario)
{
return dadoUsuario >=0 && dadoUsuario <= 2 ? true: false;
}

console.log(prazo);