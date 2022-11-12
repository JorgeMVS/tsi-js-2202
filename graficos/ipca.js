document.querySelector('button').addEventListener('click',recuperaDados)

function recuperaDados(evento) {
   evento.preventDefault();

  const url =`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101`;
                                                    //então (depois)
    fetch(url).then(function(retorno){
       //pega apenas o conteudo do retorno
    return retorno.text();

  
      //então 
    }).then(function(stringJson){

        const indice = JSON.parse(stringJson);

        console.log(indice);


                             //CRIANDO UM GRÁFICO DE LINHAS
                            new Morris.Line({
                            // ID do elemento onde o gráfico vai aparecer.
                            element: 'ipca',

                            resize: true,
                            
                            // Dados que preenchem o gráfico
                            //Esse bloco é um objeto JSON
                            data: [
                            { year: '2008', value: 20 },
                            { year: '2009', value: 10 },
                            { year: '2010', value: 20 },
                            { year: '2011', value: 10 },
                            { year: '2013', value: 20 },
                            { year: '2014', value: 10 }
                            ],
                            
                            //O nome do atributo de registro de dados que contém valores de x
                            xkey: 'year',
                            
                            // Uma lista de nomes de atributos de registro de dados que contêm valores y.
                            ykeys: ['value'],
                            
                            // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
                            // gráfico.
                            labels: ['Value']
                        });

        
    }).catch(function(){
        alert('API DO BANCO FORA DOM AR!!!');
    });
} 