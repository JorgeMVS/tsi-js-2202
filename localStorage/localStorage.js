//como trabalhar com local storage

localStorage.setItem('nome','jorge');
localStorage.setItem('sobrenome','miguel');

let btn = document.getElementById('botao');

btn.addEventListener('click',mostrar);

function mostrar(evento){

    evento.preventDefault();

    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText =
     valor;
    document.getElementById('entrada').value= '';

    //apos obtermos o dado do usuario 
    //vamos guarda-lo no local storage
    localStorage.setItem('dadoDoUsuario',valor);
}

//para recuperar o dado do local storage
//usamos o localStorage.getItem()
document.querySelector('#mostrar').innerText = 
localStorage.getItem('dadoDoUsuario');

// p/ apagar 
localStorage.removeItem();