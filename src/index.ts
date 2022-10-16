import "./styles.css";

//let precio: number = prompt("precio");
//let iva: number = prompt("iva");

let precio = document.getElementById("precio");
let iva = document.getElementById("iva");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");


//ESCUCHO EL BOTON Y ALMACENO LOS DATS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let precioIngresado: string = String(precio.value);
  let ivaIngresada: number = Number(iva.value);


let calculo: number = (precioIngresado * (ivaIngresada/100);
let final: number = calculo + Number(precioIngresado);
console.log(final);
resultado.innerText = `El Precio IVA Incluido es ${final}`;
