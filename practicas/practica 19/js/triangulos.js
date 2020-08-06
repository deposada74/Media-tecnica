/*Diseñe un algoritmo que lea tres longitudes y determine si forman o no un triángulo. 
Si es un triángulo determine de que tipo de triángulo se trata entre: 
equilátero (si tiene tres lados iguales), isósceles (si tiene dos lados iguales) o escaleno 
(si tiene tres lados desiguales). Considere que para formar un triángulo se requiere que: 
"el lado mayor sea menor que la suma de los otros dos lados".
comparacion*/

let long1 = 45; 
let long2 = 23;
let long3 = 32;

//equilatero = long1 == long2 == long3;
// isosceles = long1 != long2 == long3;
// escaleno = long1 != long2 != long3; 

if(long3 == long2 == long1){
	console.log("El triangulo es equilatero ");
} else{
	console.log("El triangulo no es equilatero ");
}

if(long1 == long2 != long3){
	console.log("El triangulo es isosceles");
} else{
	console.log("El triangulo no es isosceles");
}

if(long1 != long2 != long3){
	console.log("El trinagulo es escaleno");
} else{
	console.log("El trinagulo no es escaleno");
}
//correcion

let ladoA = 20;
let ladoB = 31;
let ladoC = 15;

/*
(OL) ==, >=, <=, !=, <, >
(OLR) && = Y,  ||=O
*/

if( ( ladoB > ladoA ) && ( ladoB > ladoC) ){
	if(ladoB < ( ladoA + ladoC ) ){
		console.log("Es un triangulo 1");
	} else{
		console.log("No es un triangulo 1");
	}if( ladoA == ladoC ){
		console.log("Es un triangulo isoceles 1");
	} else {
		console.log("Es un triangulo escaleno 1");
		}
} else if( ( ladoC > ladoA ) && ( ladoC > ladoB) ){
	if(ladoB < ( ladoA + ladoC ) ){
		console.log("Es un triangulo 2");
	} else{
		console.log("No es un triangulo 2");
	if( ladoA == ladoC ){
		console.log("Es un triangulo isoceles 2");
	} else {
		console.log("Es un triangulo escaleno 2");
		}
	}
} else if( ( ladoA > ladoC ) && ( ladoC > ladoB) ){
	if(ladoB < ( ladoA + ladoC ) ){
		console.log("Es un triangulo 3");
	} else{
		console.log("No es un triangulo 3");}
	if( ladoA == ladoC ){
		console.log("Es un triangulo isoceles 3");
	} else {
		console.log("Es un triangulo escaleno 3");
		}
} else if ( ( ladoA == ladoB ) && ( ladoA != ladoC ) || ( ladoA == ladoC ) && ( ladoA != ladoB) 
			( ladoB == ladoA ) && ( ladoB != ladoC ) || ( ladoB == ladoC ) && ( ladoB != ladoA)
			( ladoC == ladoA ) && ( ladoC != ladoB ) || ( ladoC == ladoB ) && ( ladoC != ladoA)){
	console.log("Es un triangulo equilatero");
}