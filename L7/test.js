var http = require('http');
var url = require('url');
var fs = require('fs');
var app = http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');
        if(pathname == 'login'){
            res.writeHead('200',{'content-type':'text-html;charset-utf-8'});
            fs.readFile('./test.html',function(err,data){
                if(err){return console.log(err)};
                res.write(data.toString());
                res.end('ok');
            })
        }
        if(pathname == 'showimg'){
            res.writeHead('200',{'content-type':'image/jpeg'});
            fs.readFile('./pig.jpg','binary',function(err,data){
                if(err){return console.log(err)};
                res.write(data,'binary');
                res.end('ok');
            })
        }

    }
});
 app.listen('3000');