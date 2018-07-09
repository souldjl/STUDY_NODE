var http = require('http');
var fs = require('fs');
var file = require('./readfile');
var  app = http.createServer(function(req,res){
    res.writeHead('200',{'content-type':'text/plain;charset=utf-8'});
    // fs.readFile('./a.txt',function(err,data){
    //     if(err){return console.log(err)};
    //     console.log(data.toString());
    //     res.write(data.toString());
    //     res.end();
    // })
    var path = './a.txt';
   // file.readfile(path);
    file.readfilesync(path);
    res.end();
});
app.listen('9002');