var http = require('http');
var url = require('url');
var rout = require('./modules/router');

var app = http.createServer(function(req,res){
    res.writeHead('200',{'content-type':'text/plain;charset=utf-8'});
    if(req.url!='/favicon.ico'){
        console.log(req.url); // node url module
        console.log(url.parse(req.url).pathname);
        var pathname = url.parse(req.url).pathname;

        pathname = pathname.replace(/\//,'');
        console.log(pathname);
        rout[pathname](res);

        console.log('服务启动了');
        res.end();
    }

});
app.listen('8081');
console.log('app listening ...');