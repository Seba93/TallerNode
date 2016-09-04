//Ejercicio: Generar archivo .json que tenga escrito {"saludo": "Hola mundo"}
//hint: Usar stringify

const fs = require('fs');
const saludo = {
	saludo : "Hola Mundo"
};

fs.writeFile("saludo.json", JSON.stringify(saludo), (err) => {
	if (err) throw err;
	console.log('Archivo creado!');
});

