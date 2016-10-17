//Ejercicio 1

var main = function (nombre_usuario) {

	var request = require('request');
	var fs = require('fs');
	var url1 = 'http://jsonplaceholder.typicode.com/users';
	var url2 = 'http://jsonplaceholder.typicode.com/albums';
	var url3 = 'http://jsonplaceholder.typicode.com/photos';
	var usuarios = [];
	var usuario = [];
	var username = "";
	var id_usuario = 0;
	var albums = [];
	var albums_usuario = [];
	var fotos = [];
	var fotos_album = [];
	var fotos_usuario = []; 

	request(url1, function (err, response, body) {

		if (!err && response.statusCode == 200) {
			usuarios = JSON.parse(body);
			usuario = usuarios.filter(function(u) {
				return u['name'] == nombre_usuario; //corregir esta linea
			})[0];
			
			id_usuario = usuario.id;
			username = usuario.username;

			fs.writeFile(username+".json", JSON.stringify(username, null, "\n"), (err) => {
				if (err) return err.message;
			});
			
			request(url2, function (err, response, body){
				albums = JSON.parse(body);
				albums_usuario = albums.filter(function(u) {
					return u.userId == id_usuario;
				});
			
				request(url3, function (err, response, body) {
					fotos = JSON.parse(body);
					albums_usuario.forEach(function(u){
						fotos_album = fotos.filter(function(v) {
							return v.albumId == u.id;
						});

						fs.appendFile(username+".json", JSON.stringify(u.title, null, "\n"), (err) => {
							if (err) return err.message;
						});

						fotos_album.forEach(function(v){
							fs.appendFile(username+".json", JSON.stringify(v.title+','), (err) => {
								if (err) return err.message;
							});
						});
					});
				})
 
			})
		}
	})		
}

if (require.main === module) {
	main();
}
