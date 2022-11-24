document.querySelector('input').addEventListener('keyup', recuperaDados)

function recuperaDados(evento) {
    evento.preventDefault();

    let numero = document.getElementById('numero').value;
    fetch(`http://numbersapi.com/${numero}`).then(function(retorno) {
        //pega apenas o conteudo do retorno

        return retorno.text();



        //então 
    }).then(function(cont) {

        let dados = cont;
        let saida = `${dados}`;
        document.querySelector('#number-fact').innerHTML = saida;


    });



}