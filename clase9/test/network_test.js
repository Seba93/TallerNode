//Ejecucion de pruebas sobre base de datos

const expect = require('chai').expect;
const User = require('../models/User.js');

describe('User', function () {
    describe('#getAll', function () {
        it('should fetch all users', function (done) {

	    var users = User.getAll();

	    //Debiese mostrar error
	    expect(users).to.have.lengthOf(5);

	    users.forEach(u => {
		expect(u).to.have.property('name');
	    });

	    done();
	});
    });
  
    describe('#findOne', function () {
        it('should fetch one user', function (done) {

	    var user = User.findOne(1), 1000);	

	    expect(user.id).to.be.equal(1);
	    expect(user.name).to.be.equal('Leanne Graham');

	    done();
	});
    });
});
