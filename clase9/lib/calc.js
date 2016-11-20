//Se construye calculadora basica

function add(a, b) {

	if (typeof a != 'number' || typeof b != 'number') {
		throw new Error('All arguments must be numbers');
	}	
	
	return a + b;
}


function sub(a, b) {
	
	if (typeof a != 'number' || typeof b != 'number') {
		throw new Error('All arguments must be numbers');
	}	
	
	return a - b;	
}

function mult(a, b) {

	if (typeof a != 'number' || typeof b != 'number') {
		throw new Error('All arguments must be numbers');
	}

	return a * b;	
}

function div(a, b) {

	if (typeof a != 'number' || typeof b != 'number') {
		throw new Error('All arguments must be numbers');
	}

	if (b == 0) {
		throw new Error('Second argument must be non-zero value');
	}

	return a / b;
		
}

module.exports = {
	add,
	sub,
	mult,
	div
};
