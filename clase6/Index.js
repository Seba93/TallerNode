//Persistencia de datos

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = require('./models/User.js');

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
app.get('users/:id', (req, res) => {
	var usuario = [];
	usuario = users.filter(function(u) {
		return u.id == req.params.id;
	});
	res.json(usuario[0]);
	res.end();
});

//post: Crear algo (en este caso se crea un nuevo usuario)
app.post('/users', (req, res) => {
	var usuario_nuevo = {
		id: ++current_id,
		username: req.body.username,
		email: req.body.email
	};

	User.create(usuario_nuevo)
	.then((new_user) => {
		res.json(new_user);
	})
	.catch((err) => {
		res.json(err);
	});
});

//delete: borrar algo (se borra usuario en especifico)
app.delete('/users/:id', (req, res) => {
	var id_a_borrar = req.params.id;
	users = users.filter(function(u) {
		return u.id != id_a_borrar;
	});
	res.send('Se ha eliminado usuario con id=' + id_a_borrar);
});

//put: actualizar algo (se actualiza usuario en especifico)
app.put('/users/:id', (req, res) => {
	var id_a_actualizar = req.params.id;
	users.map(function(u) {
		if (u.id == id_a_actualizar)
		{
			if (req.body.username == '' && req.body.email != '')
			{			
				u.email = req.body.email;
				return u;
			}

			else if (req.body.email == '' && req.body.username != '')
			{
				u.username = req.body.username;
				return u;
			}

			else if (req.body.username == '' && req.body.email == '')
			{
				return u;
			}
			
			else
			{
				u.username = req.body.username;
				u.email = req.body.email;
				return u;
			}
		} 

		else
		{
			return u;
		}
	});
	res.send('Se ha modificado usuario con id=' + id_a_actualizar);
});

//"Levantar" el servidor
User.sync({force: true}).then(function () {
	app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
	});	
});
