function agregar(){
	let objcontenido = document.querySelector("contenido");
	let objcuadro = document.createElement("section");
	let objtit = document.createElement("section");
	let objdes = document.createElement("section");

	let text = document.querySelector("txtdes");

	objdes.innerHTML = text.value;
	objcuadro.ClassName = "cuadro";
	objtit.ClassName = "tit";
	objdes.classname = "des";

	objcuadro.appendChild(objtit);
	objcuadro.appendChild(objdes);
}
