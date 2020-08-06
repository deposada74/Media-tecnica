/*
let A, B, aux;

A = prompt("Ingrese un dato numerico A")
B = prompt("Ingrese un dato numerico B")

if(A < 0 || B < 0){
	alert("Los valores negativos no estan permitidos intentelo nuevamente")
} else{

	if ( A > B ){

		aux = A;
		A = B;
		B = aux;

	}
	for( i=0; i<=B; i=i+5){

		if ( i>=A ){
			console.log(i)
		}
	}
}
*/
let a, b, aux, tope=1;

a = prompt("Ingrese un dato numerico a")
b = prompt("Ingrese un dato numerico b")

if(a < 0 || b < 0){
	alert("Los valores negativos no estan permitidos intentelo nuevamente")
} else{

	if ( a > b ){

		aux = a;
		a = b;
		b = aux;
	} 
	while( tope <= aux){

		tope = tope + 5; 
		console.log( aux );

	}
}