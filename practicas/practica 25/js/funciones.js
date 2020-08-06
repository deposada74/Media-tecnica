/*
que es una funcion
Es un subrutina que se puede llamar desde cualquier
parte del codigo.
Esta, está estruturada de la siguiente manera

Esta presedida de la palabra reservada function
Tiene un nombre seguido de los parentesis
Puede tener uno o varios parametros
se abre y se cierra con llaves
se llama o invoca utilizando el nombre de la funcion

Solo se ejecutara cuando esta sea llamada de lo 
contrario no pasara nada


function primeraFuncion(){
	alert("mi primera funcion");
	console.log("Bienvenidos")
}

primeraFuncion();
*/

/*Crear 4 funciones de las operaciones basicas*/
/*Crear 4 funciones que pida
mostrarlo en pagina
*/

function multiplicacion(){
	let n1 = prompt("Ingrese el primer numero a multiplicar");
	let n2 = prompt("Ingrese el segundo numero a multiplicar");
	let re = n1 * n2;
	console.log(re);
	document.write("Resultado multiplicacion: ", re, "<br>");
}
function division(){

	let n1 = prompt("Ingrese el primer numero a dividir");
	let n2 = prompt("Ingrese el segundo numero a dividir");
	let re = n1 / n2;
	console.log(re);
	document.write("Resultado division: ", re, "<br>");
}


function suma(){

	let n1 = prompt("Ingrese el primer numero a sumar");
	let n2 = prompt("Ingrese el segundo numero a sumar");
	let re = parseInt(n1 + n2);
	console.log(re);
	document.write("Resultado suma: ", re, "<br>");
}


function resta(){

	let n1 = prompt("Ingrese el primer numero a restar");
	let n2 = prompt("Ingrese el segundo numero a restar");
	let re = n1 - n2;
	console.log(re);
	document.write("Resultado resta: ", re, "<br>");
}

//realizar una funcion Que muestren en consola la fecha actual
function fecha(){
	let dia = prompt("Ingrese el dia actual");
	let mes = prompt("Ingrese el mes actual");
	let año = prompt("Ingrese el año actual");
	console.log("Fecha: " + dia + "/" + mes + "/"  + año);
	document.write(dia + "/" + mes + "/"  + año + "<br>");
}

//f1=nombre y apellido
function nya(){
	let nom = prompt("Ingrese su nombre");
	let ape = prompt("Ingrese su apellido");
	console.log("Nombre: " + nom + " " + "Apellido: " + ape);
	document.write("Nombre: " + nom + "  " + "Apellido: " + ape + "<br>");
}


//f2=sexo y edad
function sye(){
	let sexo = prompt("Ingrese su sexo: Masculino/Femenino");
	let edad = prompt("Ingrese su edad");
	console.log("Sexo: " + sexo + "Edad: " + edad);
	document.write("Sexo: " + sexo + "  " + "Edad: " + edad + "<br>");
}


//f3=escolaridad y grado
function eyg(){
	let esc = prompt("Ingrese su escolaridad");
	let gra = prompt("Ingrese su grado");
	console.log("Escolaridad: " + esc + "Grado: " + gra);
	document.write("Escolaridad: " + esc+ "  " + "Grado: " + gra + "<br>");
}


//f4=numero de novi@s que han tenido
function nov(){
	let num = prompt("Ingrese el numero de novi@s que ha tenido");
	console.log(num);
	document.write("Numero de novias ", num);
}

//llamado de funciones

multiplicacion();
division();
suma();
resta();
fecha();
nya();
sye();
eyg();
nov();