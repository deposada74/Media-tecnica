//Dado 2 numeros diferentes mostrar un mensaje que diga cual es el numero mayor y cual es el numero menor

let x1 = 23;
let x2 = 90;

if ( x1 > x2 ) {

	console.log("El numero mayor es el: " + x1);
	console.log("El numero menor es el: " + x2);

} else {

	console.log("El numero mayor es el: " + x2);
	console.log("El numero menor es el: " + x1);
}


//Juliana tiene 4 notas y desea promediarlas y desea saber si gano o no dicha materia ("Informatica") se gana con un minimo de 3.0

let nota1 = 2.5;
let nota2 = 3.0;
let nota3 = 4.8;
let nota4 = 0.5;

let promedio = ( nota1 + nota2 + nota3 + nota4 ) / 4;

if ( promedio >= 3.0 ){

	console.log("Juliana a ganado informatica con una nota de " + promedio);

} else {

	console.log("Juliana a perdido informatica con una nota de " + promedio);

}

//Un banco desea saber si aun cliente se le puede realizar un credito basado en su salario
//como politica del banco solo se le presta a personas que ganen mas de 3 salario minimos
//hacer un programa que muestre si a una persona se le puede realizar un credito o no


let salarioPersona = 2633407;

let salarioMinimo = 877802;

let salaPoli = salarioMinimo * 3;

console.log("Politica del banco: " + salaPoli);

if ( salarioPersona > salaPoli ) {

	console.log("Bienvenido adelante quiere una tacita de cafe ya viene un asesor a atenderlo " + salarioPersona);

} else {

	console.log("Señor esto no es davivienda esta en el equivocado, tome un turno via telefonica y lo estaremos llamando " + salarioPersona);

}

/* En un estacionamiento cobran $7500 por hora o fracción. 
Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento 
de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.

Diseñe un algoritmo que determine si ún número es o no es positivo.

Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, 
ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. 
Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena
en exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, 
el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas 
del producto. 

Diseñe un algoritmo que lea tres longitudes y determine si forman o no un triángulo. 
Si es un triángulo determine de que tipo de triángulo se trata entre: 
equilátero (si tiene tres lados iguales), isósceles (si tiene dos lados iguales) o escaleno 
(si tiene tres lados desiguales). Considere que para formar un triángulo se requiere que: 
"el lado mayor sea menor que la suma de los otros dos lados".



*/