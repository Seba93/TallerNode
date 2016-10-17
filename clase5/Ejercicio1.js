//Construccion de app RESTful basica

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var current_id = 1;
var users = [{ id: current_id, username: 'jonSnow', email: 'jsnow@thewall.ws' }];
var usuario = [];

//get: Obtener algo (en este caso se puede mostrar o todos los usuarios o un usuario en especifico)
app.get('/users', (req, res) => {
	res.json(users);
	res.end();

	//Falta implementar para obtener usuario en especifico
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
app.delete('/users', (req, res) => {
	var id_a_borrar = req.body.id;
	users = users.filter(function(u) {
		return u.id != id_a_borrar;
	});
	res.send('Se ha eliminado usuario con id=' + id_a_borrar);
});

//put: actualizar algo (se actualiza usuario en especifico)
app.put('/users', (req, res) => {
	var id_a_actualizar = req.body.id;
	users.map(function(u) {
		if (u.id == id_a_actualizar)
		{
			u.username = req.body.username;
			u.email = req.body.email;
			return u;
		}

		else
		{
			return u;
		}
	});
	res.send('Se ha modificado usuario con id=' + id_a_actualizar);
});

//"Levantar" el servidor
app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
});
