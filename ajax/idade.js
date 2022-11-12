document.querySelector('button').addEventListener('click',recuperaDados)

function recuperaDados(evento) {
   evento.preventDefault();

  let nome = document.getElementById('nome').value;
                                                    //então (depois)
    fetch(`https://api.agify.io?name=${nome}`).then(function(retorno){
       //pega apenas o conteudo do retorno
    return retorno.text();

  
      //então 
    }).then(function(cont){

        let dados = JSON.parse(cont);
        
        let saida = `${dados.name} tem ${dados.age} anos`;
        
        document.querySelector('#dadoRecuperado').innerHTML = saida;

        document.getElementById('nome').value = '';
    });
} 