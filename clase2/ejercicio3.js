//Ejercicio: Leer registros de https://jsonplaceholder.typicode.com/comments y calcular cantidad promedio de palabras por comentario

var request = require('request');
var url = 'https://jsonplaceholder.typicode.com/comments'
var comentarios = [];

request(url, function (err, response, body) {
	if (!err && response.statusCode == 200) {
		comentarios = JSON.parse(body);	
	}
});

var palabras_porComentario = comentarios.map(function(u) {
	return u.body.length;
});

var total_palabras = palabras_porComentario.reduce(function (val_ac, val) {return val_ac + val;}, 0);
var prom_palabras = total_palabras / comentarios.length;
console.log("Cantidad promedio de palabras por comentario: " + prom_palabras);
