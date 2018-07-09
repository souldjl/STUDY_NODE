function Teacher(id,name,res) {
    this.id = id;
    this.name = name;
    this.teach = function(){
        console.log(this.name + '老师正在讲课');
        res.write(this.name+'老师正在讲课');
    }
};

module.exports = Teacher;