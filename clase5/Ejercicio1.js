//Construccion de app RESTful basica

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var current_id = 1;
var users = [{ id: current_id, username: 'jonSnow', email: 'jsnow@thewall.ws' }];

//get: Obtener algo (en este caso se muestran todos los usuarios)
app.get('/users', (req, res) => {
	res.json(users);
	res.end();
});

//En este caso, se usa get para mostrar un usuario en especifico
app.get('/users/:id', (req, res) => {
	var usuario = users.filter(function(u) {
		return u.id == req.params.id;
	})[0];
	res.json(usuario);
	res.end();
});

//post: Crear algo (en este caso se crea un nuevo usuario)
app.post('/users', (req, res) => {
	var usuario_nuevo = {
		id: ++current_id,
		username: req.body.username,
		email: req.body.email
	};

	users.push(usuario_nuevo);
	res.json(usuario_nuevo);
	
});

//delete: borrar algo (se borra usuario en especifico)
app.delete('/users/:id', (req, res) => {
	var usuario = [];
	var id_a_borrar = req.params.id;
	users = users.filter(function(u) {

		if (u.id == id_a_borrar)
		{
			usuario = u;
		}
		
		else
		{
			return u;
		}
	});
	res.json(usuario);
});

//put: actualizar algo (se actualiza usuario en especifico)
app.put('/users/:id', (req, res) => {

	var usuario = [];
	var id_a_actualizar = req.params.id;
	users.map(function(u) {
		if (u.id == id_a_actualizar)
		{
			if (req.body.username == '' && req.body.email != '')
			{			
				u.email = req.body.email;
				usuario = u;
				return u;
			}

			else if (req.body.email == '' && req.body.username != '')
			{
				u.username = req.body.username;
				usuario = u;
				return u;
			}

			else if (req.body.username == '' && req.body.email == '')
			{
				usuario = u;
				return u;
			}
			
			else
			{
				u.username = req.body.username;
				u.email = req.body.email;
				usuario = u;
				return u;
			}
		} 

		else
		{
			return u;
		}
	});
	res.json(usuario);
});

//"Levantar" el servidor
app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
});
