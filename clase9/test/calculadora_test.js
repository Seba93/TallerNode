//Ejecucion de pruebas sobre calculadora basica

const expect = require('chai').expect;
const calc = require('../lib/calc.js');

describe ('calculator', () => {
	describe('#add', () => {

		it('should be a method', () => {
			expect(typeof calc.add).to.be.equal('function');
		});
		
		it('should add two numbers', () => {
			var result = calc.add(2,2);
			expect(result).to.be.equal(4);
			expect(calc.add(2,3)).to.be.equal(5);
		});

		it ('should throw an error if one of the parameters is not a number', () => {
			expect(calc.add.bind(calc, 'a', 1)).to.throw(Error);
		});		
	
	});

	describe('#sub', () => {

		it('should be a method', () => {
			expect(typeof calc.sub).to.be.equal('function');
		});
		
		it ('should substract two numbers', () => {
			expect(calc.sub(3,2)).to.be.equal(1);
			expect(calc.sub(4,5)).to.be.equal(-1);
		});
		
		it ('should throw an error if one of the parameters is not a number', () => {
			expect(calc.sub.bind(calc, 2, 'b')).to.throw(Error);
		});		
	});

	describe('#mult', () => {

		it('should be a method', () => {
			expect(typeof calc.mult).to.be.equal('function');
		});
		
		it ('should multiply two numbers', () => {
			expect(calc.mult(7,2)).to.be.equal(14);
			expect(calc.mult(0,5)).to.be.equal(0);
		});
		
		it ('should throw an error if one of the parameters is not a number', () => {
			expect(calc.mult.bind(calc, 'c', 3)).to.throw(Error);
		});		
	});

	describe('#div', () => {

		it('should be a method', () => {
			expect(typeof calc.div).to.be.equal('function');
		});
		
		it ('should divide two numbers', () => {
			expect(calc.div(3,1)).to.be.equal(3);
			expect(calc.div(15,3)).to.be.equal(5);
		});

		it ('should throw Error if division by zero', () => {
			expect(calc.div.bind(calc, 1, 0)).to.throw(Error);
		});		
	});

});
