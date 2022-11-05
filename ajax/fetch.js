document.querySelector('button').addEventListener('click',recuperaDados)

function recuperaDados(evento) {
   evento.preventDefault();

   //fazemos a chamada
                                                    //então (depois)
    fetch('http://127.0.0.1:5500/ajax/conteudo.txt').then(function(retorno){
       //pega apenas o conteudo do retorno
    return retorno.text();

  
      //então 
    }).then(function(cont){

        let dados = JSON.parse(cont);
        saida= '';

        dados.forEach(function(aluno) {
              // += concatenou os resultados
              saida += aluno.idade >=18 ?
              `${aluno.nome} é maior de idade <br>`: //se for maior de 18 entra aqui
              `${aluno.nome} é menor de idade <br>`; //se for menor entra aqui
        });
        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });
}