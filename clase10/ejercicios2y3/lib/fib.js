//Funcion que devuelve el n-esimo numero de Fibonacci
function fib(n) {

	if (typeof n != 'number') {
		throw new Error('Argument n must be a number');
	}

	if (n < 1) {
		throw new Error('Argument n must be >= to 1');
	}

	var value = 0;		

	if (n <= 2) {
		value = n - 1;
	}

	else {
		value = fib(n-1) + fib(n-2);
	}

	return value;
}

module.exports = {
	fib,
}
