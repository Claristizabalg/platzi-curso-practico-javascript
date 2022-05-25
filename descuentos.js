

/* function precioFinal (Original, Descuento){
    const precioFin1=(Original * Descuento)/100;
    const precioFinal= Original - precioFin1;
    return precioFinal
} */

function PrecioFinal(){
    const Original= document.getElementById ("precioProducto").value;
    const Descuento= document.getElementById ("%descuento").value;

    const precioFin1=(Original * Descuento)/100;
    const precioFinal= Original - precioFin1;
    const ResulP=document.getElementById("PrecioF")
    ResulP.innerText = "El precio final del producto es: $" + precioFinal
}
    
    
