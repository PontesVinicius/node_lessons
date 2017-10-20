var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end("<html><body><h4>Teste1</h4></html></body>");
})

app.listen(3000, function(){
    console.log('Server on')
})