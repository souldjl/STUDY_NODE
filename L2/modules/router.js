module.exports = {
    login:function(res){
        res.write('this is login page');
        console.log('有人进入login页面')
    },
    home:function(res){
        res.write('this is home page');
        console.log('有人进入home页面')
    },
};