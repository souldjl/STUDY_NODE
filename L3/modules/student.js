function Student(id,name,res){
    this.id = id;
    this.name = name;
    this.study = function(){
        console.log(this.name+'学生正在学习');
        res.write(this.name + ' 学生正在学习');
    }
};
module.exports = Student;