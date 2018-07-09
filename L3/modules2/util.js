var fs = require('fs');
var util ={
    readfile:function(path,res){
        fs.readFile(path,function(err,data){
            if(err){return console.log(err)};
            console.log(data.toString());
        });
        console.log('异步读取文件中');
    },
    readfileSync:function(path,data){
       var data = fs.readFileSync(path);
       console.log(data.toString());
       console.log('同步读取文件中');
    }
};
module.exports = util;