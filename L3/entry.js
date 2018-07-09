var http = require('http');
var url = require('url');
var fs = require('fs');

var rout = require('./modules2/router');

var optfile = require('./modules2/util');

var app = http.createServer(function(req,res){
    res.writeHead('200',{'content-type':'text/plain;charset=utf-8'});
    if(req.url != '/favicon.ico'){

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');
        res.write(pathname);
        rout[pathname]();
        res.write('hello');
        console.log('hey, here is someone is coming');


        optfile.readfile('./a.txt',res);
      //  optfile.readfileSync('./a.txt',res);
        res.end();
    }

});
app.listen('8080');
console.log('this server is listening on port http://localhost:8080');