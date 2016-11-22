//Servidor express con endpoint GET /guardar-hora

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./lib/db.js');
const axios = require('axios');
const fib_func = require('./lib/fib.js');
const API = 'https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec';

//Mostrar hora en nuestro sitio
app.get('/guardar_hora', (req, res) => {
		var datos = '';
		var hora_ = '';
		var minutos_ = '';
		var segundos_ = '';

		//Obtener hora del sitio web
		axios.get(API)
		.then(function (response) {
			datos = response.data;
			hora_ = datos.hours;
			minutos_ = datos.minutes;
			segundos_ = datos.seconds;

			db.horario.count().then(function (num_rows) {
				
				//Si la base de datos esta vacia, se INSERTA hora actual
				if (num_rows == 0) {

					var nueva_hora = {
						hora: hora_,
						minutos: minutos_,
						segundos: segundos_,		
					};					

					db.horario.create(nueva_hora)
					.then((h) => {
						res.json(h);
					})
					.catch((err) => {
						console.log(err);
					});
				}

				//En caso contrario, se MODIFICA la hora almacenada
				else {
				
					db.horario.findOne({
						where: {
							id: 1
						}
					}).then(function(h) {
						return h;	
					}).then(function (h) {
						db.horario.update({hora: hora_, minutos: minutos_, segundos: segundos_}, {where: {id: 1}})
					.then(function() {
					});

					res.json(h);
					res.end();				
					});	
				}			

			});
		});	
});

//Crear nuevo endpoint GET /fibonacci/:n que muestre el n-esimo numero de fibonacci
app.get('/fibonacci/:n', (req, res) => {
		var fib_n = fib_func.fib(parseInt(req.params.n, 10));
		var label = "fibonacci-" + req.params.n;
		var datos = {};
		datos[label] = fib_n.toString();
		res.json(datos);
		res.end();		
});

//"Levantar" el servidor
db.sequelize.sync({force: true}).then(function () {
	app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
	});	
});
