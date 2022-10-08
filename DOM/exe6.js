//atualizar elementos

//criamos um novo elemento
let novoTitulo = document.createElement('h2');

//colocamos as caracteristicas q desejamos
novoTitulo.id='task-title';
novoTitulo.appendChild(document.createTextNode('Nova lista'));

//capturamos o elemento atual
let tituloAtual = document.getElementById('task-title');

//captura o elemento pai ou mãe
let divTitulo = document.getElementsByClassName('card-action');

divTitulo[0].replaceChild(novoTitulo , tituloAtual);