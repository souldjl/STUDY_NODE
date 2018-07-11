// methods:get
var http = require('http');
var url = require('url');
var fs = require('fs');
var app = http.createServer(function(req,res){
    if(req.url !='/favicon.ico'){

       var pathname = url.parse(req.url).pathname;
       pathname = pathname.replace(/\//,'');
       if(pathname == 'login'){
            var q = url.parse(req.url,true).query; //  { user: 'ss', pwd: 'ss' }
            var q2 = url.parse(req.url).query;     //   'user=ss&pwd=ss'
            console.log(q,q2); // ur.parse(req.url,true)
           if(q['user']){
               console.log('user:',q.user);
               console.log('pwd:',q.pwd);
           }
           fs.readFile('./login.html',function (err,data) {
              if(err){return console.log(err)};

               res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
               res.write(data.toString());
               res.end();
           })
       }
    }
});
app.listen('3000');
