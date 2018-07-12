var http =require('http');
var url = require('url');
var fs = require('fs');

var querystring = require('querystring');
var app = http.createServer(function(req,res){
    if(req.url !='/favicon.ico'){

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');
        if(pathname == 'login'){
            fs.readFile('./login-post.html',function (err,data) {
                if(err){return console.log(err)};


                res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
                res.write(data.toString());
                res.end();
            });

            var data = '';
            req.on('data',function(chunk){
                data+= chunk;
            });
            req.on('end',function () {
                var postData = querystring.parse(data);
                console.log(postData); // { user: 'aaa', pwd: 'aaa' }
            })
        }
    }
});
app.listen('3030');