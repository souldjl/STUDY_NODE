var http = require('http');
var url = require('url');


var rout = require('./router/router.js');



var app = http.createServer(function(req,res){
    res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
    if(req.url != '/favicon.ico'){
        console.log('here is someone coming');
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');
        rout[pathname](res);
    }
});
app.listen('3456');
console.log('the server is listening at port http://localhost:3000');