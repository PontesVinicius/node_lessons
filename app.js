var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.end("<html><body><h4>Teste1</h4></html></body>");
})
app.get('tech', function(req, res){
    res.render('section/tech');
})
app.listen(3000, function(){
    console.log('Server on');
})