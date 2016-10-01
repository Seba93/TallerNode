//Streams y buffers: Necesidad de dividir streams grandes de datos en "trozos" de datos
//leedor = createReadStream('video.mp4');
//capturar evento: leedor.on('Data', (dataChunk) => {
			// res.send(dataChunk); (Se envia buffer ("trozo"))
		   //});

var fs = require('fs');

//Leer
//Se generan eventos
var reader = fs.createReadStream('numeros.txt');

//Se escuchan eventos
var contador = 0;
reader.on('data', (dataChunk) => {
	console.log(dataChunk);
	contador += 1;
});

reader.on('end', () => {
	//Se adhiere contador de cantidad de eventos generados
	console.log('contador de eventos: '+ contador);
	console.log('Fin \\o/');
});

//Escribir
var writer = fs.createWriteStream('hola-mundo');
writer.write("hola ");
writer.write("mundo");
writer.end();





