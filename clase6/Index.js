//Persistencia de datos

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./lib/db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get: Obtener algo (en este caso se muestran todos los usuarios)
app.get('/users', (req, res) => {
	db.User.findAll({}).then(function(users){
		res.json(users);
		res.end();	
	});	
});

//En este caso, se usa get para mostrar un usuario en especifico
app.get('/users/:id', (req, res) => {
	db.User.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(usuario) {
		res.json(usuario);
		res.end();
	});
});

//post: Crear algo (en este caso se crea un nuevo usuario)
app.post('/users', (req, res) => {
	var usuario_nuevo = {

		name: req.body.name,
		email: req.body.email
	};

	db.User.create(usuario_nuevo)
	.then((new_user) => {
		res.json(new_user);
	})
	.catch((err) => {
		res.json(err);
	});
});

//delete: borrar algo (se borra usuario en especifico)
app.delete('/users/:id', (req, res) => {

	db.User.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(num_rows) {
		res.send('Cantidad de registros eliminados:'+num_rows);
	});
});

//put: actualizar algo (se actualiza usuario en especifico)
app.put('/users/:id', (req, res) => {

	if (req.body.name == '' && req.body.email != '')
	{			
		db.User.update({email: req.body.email}, {where: {id: req.params.id}})
		.then(function(num_attr){
			res.send('Cantidad de atributos modificados:'+ num_attr);
		});
	}

	else if (req.body.email == '' && req.body.name != '')
	{
		db.User.update({name: req.body.name}, {where: {id: req.params.id}})
		.then(function(num_rows){
			res.send('Cantidad de registros modificados:'+ num_rows);
		});			
	}

	else if (req.body.name == '' && req.body.email == '')
	{
		db.User.update({}, {where: {id: req.params.id}})
		.then(function(num_attr){
			res.send('Cantidad de atributos modificados:'+ num_attr);
		});
		
	}

	else
	{
		db.User.update({name: req.body.name, email: req.body.email}, {where: {id: req.params.id}})
		.then(function(num_attr){
			res.send('Cantidad de atributos modificados:'+ num_attr);
		});			
	}
});

//"Levantar" el servidor
db.sequelize.sync({force: true}).then(function () {
	app.listen(1313, () => {
	console.log('Servidor arriba en http://localhost:1313');
	});	
});
