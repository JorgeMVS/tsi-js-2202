//Como criar elementos

// cria o elemento li
let novoItem = document.createElement('li');

//define o id do novo elemento
novoItem.id='novo-item';

//define a classe do css no elemento
novoItem.className='collection-item';

//adicona um atributo
novoItem.setAttribute('title','novo item');

//adiciona um node filho
novoItem.appendChild(document.createTextNode('alguma nova tarefa'));

//cria um sub elemento <a>
let elementoLink = document.createElement('a');

elementoLink.className='delete-item secondary-content';

elementoLink.setAttribute('href','#');

//criar sub elemento <i>
let icone = document.createElement('i');

icone.className='fa fa-remove';

//adiciona o <i> em <a>

elementoLink.appendChild(icone);

novoItem.appendChild(elementoLink);

//por class name
//let lista = document.getElementsByClassName('collection');
//lista[0].appendChild(novoItem);agi

//com query selector
let lista = document.querySelector('ul.collection');
lista.appendChild(novoItem);




