//Leer archivo, aplicar rot13 al texto y escribirlo en un nuevo archivo

var stream = require('stream');
var fs = require('fs');

//Implementacion de funcion rot13
var rot13func = function(texto) {
	return (texto ? texto : this).split('').map(function(_)
	{
		if(!_.match(/[A-Za-z]/)) return _;
		c = Math.floor(_.charCodeAt(0) / 97);
		k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
		return String.fromCharCode(k + ((c == 0) ? 64 : 96));
	}).join('');		
};

var reader = fs.createReadStream('hello.txt');
var writer = fs.createWriteStream('rot13-hello.txt');


//Se crea el "transformador"
var rot13 = new stream.Transform;

rot13._write = function(data, encoding, done) {

	var tarea = rot13func(data.toString());
	rot13.push(tarea);
	done();
}

//Se lee archivo 'hello.txt', se aplica rot13 y se escribe en 'rot13-hello.txt'
reader.pipe(rot13).pipe(writer);

//En caso de que la entrada fuese texto por consola, se debe hacer lo siguiente:
//process.stdin.pipe(rot13).pipe(writer);
