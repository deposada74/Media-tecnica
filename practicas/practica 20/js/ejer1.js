let horas = 45;
let vhora = 19500;
let seguro = 0.10;
let subsidio = 9500;
let minimo = 877802;

let salariob = horas * vhora;
let salarion = (salariob - seguro) + subsidio;

if ( salarion > minimo ){
	console.log("GANA MAS DEL MINIMO: " + salarion);
} else {
	console.log(salarion);
}