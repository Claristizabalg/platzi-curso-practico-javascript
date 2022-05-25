/* const Lista1=[
100,
200,
300,
500,
]

let sumaLista = 0;
for (let i = 0; i <Lista1.length; i++) {
    sumaLista= sumaLista+Lista1[i];
}

const promedio=sumaLista/Lista1.length; */


// Es una forma de hacerlo con un ciclo for

/* function promedio1(Lista){
    let sumaLista = 0;
    
    for (let i = 0; i <Lista.length; i++) {
        sumaLista= sumaLista+Lista[i]; 
} */

// Otra forma de hacerlo es con un metodo llamado reduce

function promedio1(Lista){
const sumaLista= Lista.reduce(

function (valorAcomulado=0, nuevoElemento){

return valorAcomulado+nuevoElemento
}
);

const promedio=sumaLista/Lista.length;
return promedio;
}

