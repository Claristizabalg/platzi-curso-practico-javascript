
/* function AlturaTriangulo (lado1,lado2,base){
    const b=base/2
    if(lado1===lado2){
       const altura= (lado1*lado1)-b;
       const h=Math.sqrt(altura)
       return h;
    } else {
        return "No es un triangulo isoceles"
    }
} */

/* Interactuamos con el html */


function CalcularAltura(){
    const lado1=document.getElementById("lad1").value;
    const lado2=document.getElementById("lad2").value;
    const base=document.getElementById("bas").value;


   
    const b=base/2
    if(lado1===lado2){
       const altura= (lado1*lado1)-b;
       const h=Math.sqrt(altura)
       alert (h);
    } 
    else {
        alert ("No es un triangulo isoceles")
    }
}
