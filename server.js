var http = require('http');

var server = http.createServer(function(req, res){
    
    var cat = req.url
    if(cat == '/tech') {
        res.end("<h1>TecNews</h1>");
    }
    else if(cat == '/hardware') {
        res.end('<h1>Hardware News</h1>');
    }
    else if(cat == '/') {
        res.end("<html><body>Portal</body></html>");
    }
    else {
        res.end('nothing to show');
    }
    
});

server.listen(3000);
