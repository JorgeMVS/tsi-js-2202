document.
    querySelector('button').
       addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){
            
            //recupera a string JSON e tranforma em objeto JSON
            let dados = JSON.parse(this.responseText);
            let saida ='';
            //looping para ler o vetor
            dados.forEach(function(aluno){
            //verifica a idade da pessoa para mostrar se é maior ou menor

            // += concatenou os resultados
            saida += aluno.idade >=18 ?
            `${aluno.nome} é maior de idade <br>`: //se for maior de 18 entra aqui
            `${aluno.nome} é menor de idade <br>`; //se for menor entra aqui
                
            });
            //mostra na tela a saida (resultado do if)
            document.querySelector('#dadoRecuperado').innerHTML = saida;
       }
   }

    XHR.send();
} 