const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com/users';

function getAll() {

	var users = [];	
		
	axios.get(API)
	.then(function(response) {
		users = response.data;
	});

	return users;
}

function findOne(userId) {

	var users = getAll();
    
	users = users.filter(function(u) {
    		return u.id == userId;
    	})[0];

	return users;
}

module.exports = {
    getAll,
    findOne
}

