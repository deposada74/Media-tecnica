/*En un estacionamiento cobran $7500 por hora o fracción. 
Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento 
de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.*/

let hora = 7500;
let minutos = 2;
let tcarroestacionado =  125;

let totalapagar = (hora / minutos) * tcarroestacionado;
console.log("El total a pagar es de: " + totalapagar);

//correcion

let horas = 1;
let minutos = 3;
let horasadicionales = 0;
let cobro = 7500

if(minutos > 0){
	
}