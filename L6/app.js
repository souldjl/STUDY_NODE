var http = require('http');
var url = require('url');
var fs = require('fs');
var app = http.createServer(function(req,res){
    if(req.url !='/favicon.ico'){

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');

        try{
            if(pathname == 'login'){
                fs.readFile('./login.html',function (err,data) {
                    if(err){ return console.log(err) };
                    res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
                    res.write(data.toString());
                    res.end();
                })
            }else if(pathname == 'showimg'){
                fs.readFile('./pig.jpg','binary',function(err,data){
                    if(err){ return console.log(err) };
                    res.writeHead('200',{'content-type':'image/jpeg'});
                    res.write(data,'binary');
                    console.log('图片读出来了');
                    res.end();
                })
            }else{
                res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
                res.write('something error');
                res.end();
            }
        }catch(err){
                console.log(err)
        }

    }
});
app.listen('8080');
console.log('the server is runing at the port http://localhost:8080');