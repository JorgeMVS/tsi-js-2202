const entradaTarefa=document.querySelector('#tarefa');
const btnAddTarefa= document.querySelector('.btn');
const listaTarefa= document.querySelector('.collection');
const filtroTarefa =document.querySelector('#filtro');
const btnLimpaTudo =document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){
    
    btnAddTarefa.addEventListener('click',addTarefa)
    listaTarefa.addEventListener('click',apagarTarefa)
    btnLimpaTudo.addEventListener('click',limparTarefas)
    filtroTarefa.addEventListener('keyup',filtrarTarefas)
}
carregaMonitoresDeEventos();



function filtrarTarefas(evento)
{
    //toLowerCase deixa tudo minusculo
    const procurado = evento.target.value.toLowerCase();

    const tarefas = document.querySelectorAll('.collection-item')

   //para cada tarefa existente busque a string desejada
   tarefas.forEach(function(tarefa){

    //recuperamos apenas o texto do elemento <li> onde esta a tarefa
    textoTarefa = tarefa.innerText;

    //procuramos a string digita no filtro no texto que está o li

    //se false (diferente de -1) ele retorna -1 (não false)
    if (textoTarefa.toLowerCase().indexOf(procurado) != -1) 
    {
        tarefa.style.display='block';
    } 
    
    else
    {
        tarefa.style.display='none';
    }


   });
}



function limparTarefas(evento)

{
    evento.preventDefault();
    listaTarefa.innerHTML ='';

}



function apagarTarefa(evento)
    {
        //se o elemento pai tiver a classe apaga tarefa ou seja, for o elemnto "a", paga "li" ou sej a tarefa 
        if (evento.target.parentElement.classList.contains('apaga-tarefa')) {
            
            //apaga o elemento pai do "a", ou seja, o li, pois o elemento alvo do evento foi o ( i )
            evento.target.parentElement.parentElement.remove();
        }
    }

function addTarefa(evento){// chama o evento q acontece acima com o 
    //add tarefa
    evento.preventDefault();

//verifica se o user entrou com uma tarefa 
    if(entradaTarefa.value===''){
        alert('entre com uma  tarefa');
    }
    else
    {
        const li =document.createElement('li');
        li.className='collection-item';
        li.appendChild(document.createTextNode(entradaTarefa.value));
    
        const a = document.createElement('a');
        a.className='apaga-tarefa secondary-content';
    
        const i=document.createElement('i'); //chama no html a fonte
        i.className='fa fa-remove';// vem do fontawesome,icone do x
                                   
    
        //monta o elemneto em li para colocar em ul 
        a.appendChild(i);
        li.appendChild(a);
        listaTarefa.appendChild(li);

        //gravar tarefa no localStorage
        gravarTarefa(entradaTarefa.value);
    }
}
    
   function gravarTarefa(tarefa){
    
    let tarefas = [];
    //verifica se já há algo gravado no banco
    let tarefasDoStorage = localStorage.getItem('tarefas');

    if (tarefasDoStorage != null) {
        
         //com o metodo JSON.stringify() tranformamos vetores e objs em estrings
        tarefas = JSON.parse(tarefasDoStorage);
    }
       

    tarefas.push(tarefa);

    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}




