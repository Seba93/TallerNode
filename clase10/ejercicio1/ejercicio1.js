//Escribir una funcion que retorne una promesa

//Se importa modulo para convertir funcion en promesa (promisify-node)
var promisify = require('promisify-node');
//Se convierten en promesas las funciones de modulo fs
var fs = promisify('fs');

//A partir de la conversion anterior, se prueba "nueva" funcion readFile
fs.readFile('./archivo_prueba.txt', "utf-8")
.then(function(file_content) {
	console.log(file_content);
});
