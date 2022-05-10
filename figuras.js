/* Cuadrado */

/* console.group("Cuadrado") */
/* const LadoCuadrado= 5;
console.log("Los lados de mi cuadrado miden: " + LadoCuadrado + "cm");  
const PerimetroCuadrado = LadoCuadrado * 4;
console.log("El perimetro es: " + PerimetroCuadrado + "cm"); 
const AreaCuadrado= LadoCuadrado * LadoCuadrado;
console.log("El area del cuadrado es: "+ AreaCuadrado + "cm2");
 */

function perimetroCuadrado(lado){
    return lado*4;

}
function areaCuadrado(lado){
    return lado*lado;
}
/* Triangulo */

/* console.group("Triangulo");
const LadoTriangulo1=6;
const LadoTriangulo2=6;
const BaseTriangulo=4;
const AlturaTriangulo= 5.5;*/



/* const  PerimetroTriangulo= LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
console.log("El perimetro de mi triangulo mide: " + PerimetroTriangulo + "cm") */
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}


/* const AreaTriangulo= (BaseTriangulo * AlturaTriangulo) / 2;
console.log("El Area de mi triangulo mide: " + AreaTriangulo + "cm2");
console.groupEnd(); */
function areaTriangulo(base,altura,){
    return (base*altura) / 2;
} 
/* Circulo */

/* console.group("Circulo");

const Radio= 4;
const Diametro= Radio * 2; */

/* Circunferencia */

const PI= Math.PI;
/* const perimetroCirculo= Diametro * PI;

console.log ("El perimetro de mi circulo es: " + perimetroCirculo + "cm ");*/

function radioCirculo(radio){
    return radio *2;
}

function perimetroCirculo(radio) {
    const Diametro= radioCirculo(radio);
    return Diametro * PI;

}

/* const AreaCirculo= (Radio * Radio) * PI;

console.log("El area del circulo e: " + AreaCirculo + "cm");

console.groupEnd(); 
 */
function areaCircunferencia (radio,PI){
    return (radio * radio) * PI;


}






