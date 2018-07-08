var http = require('http');

var otherfun = require('./modules/otherfun');
var  app = http.createServer(function(req,res){
    res.writeHead('200',{'content-type':'text/plain;charset=utf-8'});
    var name = "fun1";
    otherfun[name](res);
    otherfun[name](res);
   console.log('有人进来了');
   res.end();
});
app.listen('8080');
console.log('应用程序启动了');