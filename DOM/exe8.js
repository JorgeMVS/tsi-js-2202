let cartao = document.querySelector('.card');

let titulo = document.querySelector('h5');

cartao.addEventListener('mousemove',mecheu);

function mecheu(evento){
    //console.log(evento.type);

titulo.textContent =`Eixo X: ${evento.offsetX}
 Eixo Y: ${evento.offsetY}`;

document.body.style.backgroundColor = 
`rgb(${evento.offsetX},
    ${evento.offsetY},40)`;

}