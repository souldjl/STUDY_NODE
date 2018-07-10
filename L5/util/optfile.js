var fs = require('fs');
module.exports ={
    readfile:function(path,res,recall){
        fs.readFile(path,function(err,data){
            if (err) { return console.log(err)}
            res.write(data.toString());
            console.log(data.toString());
            recall(res);
        });
        console.log('异步读取文件方法被调用');
    },
    readfileSync:function(path,res,recall){
       var data = fs.readFileSync(path);
       console.log('同步方法执行完毕');

        res.write(data.toString());
       console.log(data.toString());
       recall(res);
    }
}