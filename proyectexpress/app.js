var express = require('express');
var app =express();

app.get('/Hola', function (req, res){

    res.send('Hola mundo!');
});

app.get('/adios', function (req, res){

    res.send('Adios!');
});
app.listen (3000, function(){

console.log('Aplicacion ejemplo, escuchando el puerto 3000');


});