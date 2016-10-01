//Uso de pipe

var fs = require('fs');
var gzip = require('zlib').createGzip();

var reader = fs.createReadStream('numeros.txt');
var writer = fs.createWriteStream('copia-numeros.txt');

reader.pipe(gzip).pipe(writer);

