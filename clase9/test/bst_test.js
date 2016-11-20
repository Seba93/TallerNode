//Ejecucion de pruebas sobre arbol binario de busqueda

const expect = require('chai').expect;
const bst = require('../lib/bst.js');

describe ('Binary Search Tree', () => {
	describe('#BinarySearchTree', () => {

		it('should be a method', () => {
			expect(typeof bst.BinarySearchTree).to.be.equal('function');
		});
		
		it('should return an object', () => {
			var a = new bst.BinarySearchTree();
			expect(typeof a).to.be.equal('object');
		});
	});

	describe('#BinarySearchTree.prototype.append', () => {

		it('should be a method', () => {
			expect(typeof bst.BinarySearchTree.prototype.append).to.be.equal('function');
		});
		
		it('should return an object', () => {
			var b = new bst.BinarySearchTree();
			expect(typeof b.append(1).append(2).append(3)).to.be.equal('object');
		});		
	});

	describe('#BinarySearchTree.prototype.maxValue', () => {

		it('should be a method', () => {
			expect(typeof bst.BinarySearchTree.prototype.maxValue).to.be.equal('function');
		});
		
		it ('should return a number', () => {
			var c = new bst.BinarySearchTree();
			c.append(1).append(2).append(3);

			expect(typeof c.maxValue()).to.be.equal('number');
			expect(c.maxValue()).to.be.equal(3);
		});		
	});

	describe('#BinarySearchTree.prototype.minValue', () => {

		it('should be a method', () => {
			expect(typeof bst.BinarySearchTree.prototype.minValue).to.be.equal('function');
		});
		
		it ('should return a number', () => {
			var d = new bst.BinarySearchTree();
			d.append(1).append(2).append(3);

			expect(typeof d.minValue()).to.be.equal('number');
			expect(d.minValue()).to.be.equal(1);
		});	
	});

	describe('#BinarySearchTree.prototype.height', () => {

		it('should be a method', () => {
			expect(typeof bst.BinarySearchTree.prototype.height).to.be.equal('function');
		});
		
		it ('should return a number', () => {
			var e = new bst.BinarySearchTree();
			e.append(5).append(1).append(4).append(2).append(3);

			expect(typeof e.height()).to.be.equal('number');
			expect(e.height()).to.be.equal(4);
		});	
	});
});
