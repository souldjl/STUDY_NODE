var optfile = require('../util/optfile');
module.exports = {
    login:function(res){
        console.log('dologin');

        function recall(res){
            res.end('');
        }
        optfile.readfile('./login.html',res,recall);

    },
    register:function(res){
        console.log('doregister');
        function recall(res){
            res.end('');
        }
        optfile.readfile('./register.html',res,recall);
    },
};