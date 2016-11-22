//Ejecucion de pruebas sobre funcion fibonacci

const expect = require('chai').expect;
const fib_func = require('../lib/fib.js');

describe ('Fibonacci function', () => {
	describe('#fib', () => {

		it('should be a method', () => {
			expect(typeof fib_func.fib).to.be.equal('function');
		});

		it('should return a number', () => {
			expect(typeof fib_func.fib(3)).to.be.equal('number');
		});
		
		it('should return the nth Fibonacci number', () => {
			expect(fib_func.fib(1)).to.be.equal(0);
			expect(fib_func.fib(8)).to.be.equal(13);
			expect(fib_func.fib(18)).to.be.equal(1597);
		});

		it ('should throw an error if parameter is not a number', () => {
			expect(fib_func.fib.bind(fib_func, '5')).to.throw(Error);
		});

		it ('should throw an error if parameter is < to 1', () => {
			expect(fib_func.fib.bind(fib_func, 0)).to.throw(Error);
		});			
	});
});
