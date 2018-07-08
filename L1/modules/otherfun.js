module.exports={
    fun1:function(res){
        console.log("我是fun1");
        res.write('<h2>hello world</h2>');
    },
    fun2:function(res){
        console.log("我是fun2");
        res.write('hello world');
    }
};