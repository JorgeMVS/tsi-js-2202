/*
let e;

e=document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(valor){


    console.log(valor.innerText);
});

// com getElementsByTagName
let e;

e=document.getElementsByTagName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(valor){


  valor.style.color='green';
  

  console.log(valor.innerText);

});

//sem função anônima
e.forEachh(algumaCoisa);

fuction algumaCoisa(val){
    console.log(val);
}





// com querySelectorAl
let e;
//altera cor even-par/ odd- impar

e = document.querySelectorAll('li:nth-child(even)');

console.log(e);

e.forEach(function(valor){

   valor.style.background = "#dedede";
});
*/

let e;
e=document.querySelector('ul.collection');

//console.log(e.childElementCount);
//console.log(e.firstChild);

console.log(e.children[3].children[0]);