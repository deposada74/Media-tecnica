/*Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, 
ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. 
Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena
en exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, 
el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas 
del producto.*/

let dx3d = 0.15; //descuento por cada 3 docenas
let docenass = 3;
let precioxd = 10000;
let oxc3d = 1; //obsequio por cada 3 docenas
let dx1o2d = 0.10;

let	descuento1 = (precioxd * docenass * dx3d) + oxc3d;
let descuento2 = (precioxd * docenass * dx1o2d);

if(docenass > 3){
	console.log(descuento1);
} else{
	console.log(descuento2);
}
//correcion

let producto = "televisor";
let precio = 500;
let docenas = 9;
let descuento = 0;
let obsequio = 0;

if(docenas > 3 ){
	descuento = 0.15;
	obsequio = docenas - 3;
} else{
	descuento = 0.10;
}

let monto = precio * docenas * 12;
let totaldescuento = monto * descuento;
let montoapagar = monto - totaldescuento;
console.log("total descuento: " + totaldescuento);
console.log("monto: " + montoapagar);
console.log("unidades por docenas" + obsequio);