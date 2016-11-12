//Para evitar problema de "callback hell", es conveniente reemplazar http.request por promesas
//Promesas ofrecen dos posibilidades: Reject y resolve (este ultimo se usa en caso de error)
//Manejaremos las promesas usando bluebird
//NOTA: Desde esta clase se comienza a utilizar yarn en vez de npm para la instalacion de depedencias, por motivos de eficiencia en dicho proceso

const request = require('request');
const API_URL = 'http://jsonplaceholder.typicode.com';
const Promise = require('bluebird');

//Esta es la forma correcta de convertir una funcion con callback en promesas
//var myrequest = Promise.promisify(request); 

function myRequest(url) {
	return new Promise(function (resolve, reject) {
		request(url, function(err, response, body) {
			if (err) {
				return reject(err);
			}
			resolve(JSON.parse(body));
		});
	});
}

//Procesamiento secuencial de requests (no es lo ideal)
var promesa = myRequest(API_URL + '/users')
	.then(function(u) {
		return myRequest(API_URL + '/albums')
	})
	.then(function (albums) {
		return request(API_URL + '/photos');
	})
	.then(function(photos){
		console.log(photos);
	})
	.catch(function(err) {
		console.error("Hubo un error", err)
	});

//Procesamiento paralelo de requests (método recomendado)
var promesa1 = myRequest(API_URL + '/users');
var promesa2 = myRequest(API_URL + '/albums');
var promesa3 = myRequest(API_URL + '/photos');
Promise.all([promesa1, promesa2, promesa3])
	.then(function(x) {
		console.log(x);	
	})
