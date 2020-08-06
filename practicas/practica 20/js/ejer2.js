let not1 = 4.0;
let not2 = 7.0;
let not3 = 5.0;
let not4 = 8.0;
let carne = 4548348;
let nombre = "erick joohnsomp";

let definitiva = ( not1 + not2 + not3 + not4 ) / 4;


if ( definitiva >= 6.0 ){

	console.log( "APROBO" + carne, nombre, definitiva );

} else if ( definitiva >= 2.0){

	console.log( "HABILITA" + carne, nombre, definitiva );

} else if ( definitiva < 2.0){

	console.log( "REPROBO" + carne, nombre, definitiva );

}