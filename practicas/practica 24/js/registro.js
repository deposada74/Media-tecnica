let NDR, edad, aedad=0, ecivil, nestudios, periodico, pi=0, epint=0;

NDR = prompt("Ingre los posibles registros");
for(i=1; i<= NDR; i++){
	edad = prompt("Ingrese su edad");
		console.log(edad);
		aedad++;
	ecivil = prompt("Estado civil: soltero o casado 1/2");
		if(ecivil == 1){
			console.log("Soltero");
		}else{
			console.log("Casado");
		}
	nestudios = prompt("Nivel de estudios: Primaria (1), Secundaria (2), Universidad (3)");
		if(nestudios == 1){
			console.log("Nivel de estudios: Primaria");
		}else if(nestudios == 2){
			console.log("Nivel de estudios: Secundaria");
		}else{
			console.log("Nivel de estudios: Universidad");
		}
	periodico = prompt("Periodico que prefiere: Internacional (1), Local (2), Economico (3), Cultural (4).");
		if(periodico == 1){
			console.log("Periodico preferido: Internacional");
		}else{
			if(periodico == 2){
				console.log("Periodico preferido: Local");
			}else if(periodico == 3){
				console.log("Periodico preferido: Economico");
			}else{
				console.log("Periodico preferido: Cultural");
			}
		}
}
if(periodico == 1){
	pi++;
}
console.log(pi, ,epint);


// correcion 