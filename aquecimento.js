
/* //repetições
for (let i=1;i<=10;i++)
{
    document.write('número da linha: '+ i +'<br>');
}



let i=1;

while(i<=10)
{
    document.write('número da linha: '+ i +'<br>');
    i++;
}


let i=1;

do{
    
    document.write('número da linha: '+ i +'<br>');
    i++;
}while (i<=10)


//condições

let i= 1;
switch(i)
{
    case 1:
    document.write("Segunda");
    break;

    case 2:
    document.write("Terça");
    break;
    
    case 3:
    document.write("Quarta");
    break;
    
    case 4:
    document.write("Quinta");
    break;
    
    case 5:
    document.write("Sexta");
    break;
    
    case 6:
        document.write("Sábado");
    break;

    case 7:
        document.write("Domingo");
    break;

    default:
        document.write("ERRO!!! Digite um valor de 1 á 7!!!");

    
}
let a =10;
let b=15;

if (a>b)
{
    docuemnt.write("A é maior que B");

}

else

{
    document.write("B é maior que A");
}

//ternário
let x = prompt("digite m ou f");
let res = x =="m" ? 'masculino' : 'feminino';
document.write(res);
*/

//coalescente

let coisa = null;
let variavel = coisa ?? "não há";
document.write(variavel);