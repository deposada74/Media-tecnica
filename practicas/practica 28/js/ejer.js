function agregar(){
	let objs1 = document.querySelector(".s1");
	
	let objs2 = document.createElement("section");
	let objb1 = document.createElement("button");
	let objb2 = document.createElement("button");
	let objb3 = document.createElement("button");
	let objs3 = document.createElement("section");
	let objimg = document.createElement("section");

	objs3.className = "s3";
	objimg.className = "img";

	//objs2.appenChild(objb1,objb2,objb3);
	objs2.appenChild(objb1);
	objs2.appenChild(objb2);
	objs2.appenChild(objb3);
	objs2.appenChild(objs3);
	objs2.appenChild(objimg);
}