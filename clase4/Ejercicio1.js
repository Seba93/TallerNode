//Ejercicio: Leer un archivo y escribir su contenido en otro

var fs = require('fs');
var reader = fs.createReadStream('numeros.txt');
var writer = fs.createWriteStream('copia-numeros.txt');

reader.on('data', (dataChunk) => {
	writer.write(dataChunk);
});

reader.on('end', () => {
	writer.end();
});

//Otra forma de hacerlo es reemplazar las lineas 7 a la 13 por:
//reader.pipe(writer);

//Para la tarea, resulta util usar:
//reader.pipe(rot13).pipe(writer);
//Lo que se hace es pasar lo leido por reader a rot13
//y la transformacion realizada por rot13 pasarsela a
//writer para que escriba el archivo
