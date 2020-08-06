//correcion
//DEFINICION DE VARIABLES
let edad, estadoCivil, nivelEstudio, seccionPeriodico, rta;
let acuEdad, conEdad, promedioEdad;
//INICIALIZACION DE VARIABLES
edad = 0;
estadoCivil=0;
nivelEstudio=0; 
seccionPeriodico=0;
rta = "si";
acuEdad = 0;
conEdad = 0;
promedioEdad = 0;
while (rta == "si"){
	edad = parseInt(prompt("Ingrese su edad"));
	estadoCivil=parseInt(prompt("Ingrese su estado civil 1:Soltero, 2:Casado"));
	nivelEstudio=parseInt(prompt("Ingrese su Nivel de Estudio 1:Primaria, 2:Secundaria, 3:Universidad")); 
	seccionPeriodico=parseInt(prompt("1:Internacional, 2:Local,3:Economica, 4:Cultural"));
	if(seccionPeriodico==1){
		acuEdad+=edad;
		conEdad++;
	}

	rta = prompt("Desea ingresar otro registro? si/no");
}
promedioEdad = acuEdad/conEdad;

console.log(promedioEdad);

//PROEMDIO = ACU / CON