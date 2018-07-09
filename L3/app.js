var http = require('http');
var Teacher = require( './modules/Teacher');
var Student = require( './modules/Student');
var app = http.createServer(function( req ,res ){
    res.writeHead('200',{'content-type':'text/plain;charset=utf-8'});
    if(req.url !='/favicon.ico'){
        res.write('hello world');
        console.log('有人进来了😯');
        var teac1 = new Teacher('1','张二',res);
        teac1.teach();
        res.write('<br/>');
        var Stu1 = new Student('1','王xx',res);
        Stu1.study();
        res.end();
    }
});

app.listen('9000');
console.log('this.server is  run at http://localhost:9000');