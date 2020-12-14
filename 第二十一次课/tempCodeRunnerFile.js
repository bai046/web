　function f1(callback){

    　　　　setTimeout(function () {
    
    　　　　　　// f1的任务代码
    
    　　　　　　callback();
    
    　　　　}, 1000);
    
    　　}
    
    //执行代码就变成下面这样：
    
    　　f1();