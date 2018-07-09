var fs = require('fs');
function readfile(path){
    fs.readFile(path,function (err,data) {
        if(err){return console.log(err)};
        console.log (data.toString());
    });
    console.log('正在执行readfile')
    // 非阻塞，通过回调函数来实现
}

function readfilesync(path){
    var data =  fs.readFileSync(path);
    console.log(data.toString())
    console.log('正在执行readfilesync');
    //阻塞
}

module.exports = {readfile,readfilesync} ;
