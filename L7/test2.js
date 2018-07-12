var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var app = http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//,'');
        console.log(pathname)
        // if(pathname == 'form'){
        //     var rdata = url.parse(req.url,true).query;
        //         var q = url.parse(req.url,true).query;
        //     console.log(rdata)
        //     if(rdata['user']){
        //         console.log(rdata)
        //     }
        //     fs.readFile('./form.html',function(err,response){
        //         if(err){return console.log(err)};
        //         res.writeHead('200',{'content-type':'text-html;charset-utf-8'});
        //         res.write(response.toString());
        //         res.end();
        //     })
        // }
        if(pathname == 'form'){
           var sData = '';
           req.on('data',function(chunk){
               sData += chunk;
           });
           req.on('end',function(){
              var data = querystring.parse(sData);
              console.log(data);
           });
            fs.readFile('./form.html',function(err,response){
                if(err){return console.log(err)};
                res.writeHead('200',{'content-type':'text-html;charset-utf-8'});
                res.write(response.toString());
                res.end();
            })
        }
    }
});
app.listen('3008');