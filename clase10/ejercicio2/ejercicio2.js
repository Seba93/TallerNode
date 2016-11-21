//Servidor express con endpoint GET /guardar-hora

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./lib/db.js');
const axios = require('axios');
const API = 'https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';

//Cuando se crea la base de datos, se agrega hora por defecto

var nueva_hora = {
		hora: '0',
		minutos: '0',
		segundos: '0',		
	};

db.hora.create(nueva_hora)
	.then(() => {
	})
	.catch((err) => {
		res.json(err);
	});

//Mostrar hora en nuestro sitio
app.get('/guardar_hora', (req, res) => {
		var datos = '';
		var hora = '';
		var minutos = '';
		var segundos = '';
		//Obtener hora del sitio web
		axios.get(API)
		.then(function (response) {
			datos = response.data;
			hora_ = datos.hours;
			minutos_ = datos.minutes;
			segundos_ = datos.seconds;

			db.User.findOne({
				where: {
					id: 1
				}
			}).then(function(horario) {
				return horario;	
			}).then(function (horario) {
				db.horario.update({hora: hora_, minutos: minutos_, segundos: segundos_}, {where: {id: 1}})
				.then(function() {
				});
			});
		});
		
		res.send('Se ha actualizado la hora exitosamente!');
		res.end();	
	});	
});

//Crear nuevo endpoint GET /fibonacci/:n que muestre el n-esimo numero de fibonacci
fib = function(n) {

	var value = 0;		

	if (n <= 2) {
		value = n - 1;
	}

	else {
		value = fib(n-1) + fib(n-2);
	}

	return value;

}

app.get('/fibonacci/:n', (req, res) => {
		var fib_n = fib(req.params.id);
		var datos = {"fibonacci-" + fib_n.toString()};
		res.send(datos);
		res.end();	
	});	
});

//"Levantar" el servidor
db.sequelize.sync({force: true}).then(function () {
	app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
	});	
});
