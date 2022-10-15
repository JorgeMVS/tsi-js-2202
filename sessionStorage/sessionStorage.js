//como trabalhar com session storage

sessionStorage.setItem('nome','jorge');
sessionStorage.setItem('sobrenome','miguel');

let btn = document.getElementById('botao');

btn.addEventListener('click',mostrar);

function mostrar(evento){

    evento.preventDefault();

    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText =
     valor;
    document.getElementById('entrada').value= '';

    //apos obtermos o dado do usuario 
    //vamos guarda-lo no session storage
    sessionStorage.setItem('dadoDoUsuario',valor);
}

//para recuperar o dado do session storage
//usamos o sessionStorage.getItem()
//get item serve p colocar na tela
//set item inserir o dado no banco
document.querySelector('#mostrar').innerText = 
sessionStorage.getItem('dadoDoUsuario');

// p/ apagar 
//sessionStorage.removeItem();

// session 
// x 
//local
//qual a diferença entre eles
//Utilize localStorage para uso a longo prazo e
//sessionStoragequando você precisa armazenar algo temporário
//(ie dados de uma sessão). Ambos também são escopo por fabricantes de navegadores.


//para guradar algo que não seja uma stringa no localStorage, temos q converter para uma string
//com o metodo JSON.stringify() tranformamos vetores e objs em estrings

let vetor = ['pera','laranja','uva'];

sessionStorage.setItem('frutas', JSON.stringify(vetor));

let recupDado = JSON.parse(sessionStorage.getItem('frutas'));

recupDado [3]='banana';
recupDado[4]='manga';

let strRep = JSNO.stringify(recupDado);

sessionStorage.setItem('frutas',strRep);

