//como apagar elementos 

/*
let itens = document.querySelectorAll('li');
console.log(itens);

//seleciona na posição do vetor onde vai remover
itens[0].remove();
*/

//outra forma de remover
let item = document.querySelector('ul');
console.log(item.firstElementChild.firstElementChild)

//item.remove()
item.firstElementChild.firstElementChild.remove();