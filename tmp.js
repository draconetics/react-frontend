var tmp = {
	fruta: 2,
	manzana: 5,
	autos: [{name:'mario'},{user:'dracon'}]
}
var aux = [...tmp.autos, 5,6];
console.log(tmp.autos.length);
console.log(aux);