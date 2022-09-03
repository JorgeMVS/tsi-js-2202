let vetor =["jorge","Miguel","Vieira","da","Silva"];

//looping com vetor
console.log(vetor.length);

for(let i=0; i<vetor.length;i++)
{
    //interpolação
console.log(`Linha: ${vetor[i]}`);
}

//for each

vetor.forEach(function(valor,indice)
{
    console.log(`${indice}:${valor}`);
})

// map
vetor.map(function(val){
    console.log(val);
})
