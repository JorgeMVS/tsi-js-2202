document.querySelector('button').addEventListener('click',recuperaDados)

function recuperaDados(evento) {
   evento.preventDefault();
   document.querySelector('#ipca').innerHTML ='';

  const url =`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101`;
                                                    //então (depois)
    fetch(url).then(function(retorno){
       //pega apenas o conteudo do retorno
    return retorno.text();

      //então 
    }).then(function(stringJson){

        const indices = JSON.parse(stringJson);

        let usuario = document.getElementById('usuario').value;


        let indice;
        let ipca = [];

        indices.forEach( function ( mes ) {
                        
          anoString = mes.data.substring(6, 10);
          mesString = mes.data.substring(3, 5);
          anoMesString = anoString + '-' + mesString;  

          if(parseInt(anoString) != usuario && usuario != "")
          {
            return;
          }

         indice = parseFloat(mes.valor);
         ipca.push({month: anoMesString, value: indice});

        });

        if (ipca.length==0) {
            alert(`Não há dados para o ano ${usuario}`);
        }



console.log(ipca);        //fzr em casa colocar os dadosda pi no grafico


                             //CRIANDO UM GRÁFICO DE LINHAS
    jsonParaMorris = {
                            // ID do elemento onde o gráfico vai aparecer.
                            element: 'ipca',

                            data:ipca,
                            
                            //O nome do atributo de registro de dados que contém valores de x
                            xkey: 'month',
                            
                            // Uma lista de nomes de atributos de registro de dados que contêm valores y.
                            ykeys: ['value'],
                            
                            // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
                            // gráfico.
                            labels: ['IPCA']
                     };

                        new Morris.Line(jsonParaMorris);

        
    }).catch(function(){
        alert('API DO BANCO FORA DOM AR!!!');
    });
} 