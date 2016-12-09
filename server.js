// importando express
var express = require('express');

var rasApp = express(); //


rasApp.get('/', function helloWorld(request, response) {
	response.send('Ola Mundo!!');
});


rasApp.listen(3000, function servStart() {
	console.log(' Servidor iniciou na porta 3000!');
});