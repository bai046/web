//call apply bind 方法改变this引用

function apple(name,price,address){
    this.name=name;
    this.price=price;
    this.address=address;
}

let apply=new apple("redapple",20,"nanchang");
let apply1=new apple("greenapple",30,"ganzhou");

let arr=[1,2,3,4,5]
let arr1=new Array(4);
arr1[0]='A';
arr1[1]='B';
arr1[2]='C';
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
arr1.every(function(arg){
    console.log(arg);
    return true;
})

//函数参数
function printName(a,b){
    console.log(a)
    console.log(b)
    console.log(arguments);
    console.log(arguments.length);
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    //无法运用every方法 arguments.every(function(value){
    //     console.log(value);
    //     return true;
    // })
    // 解决
    //call方法改变this引用
    Array.prototype.every.call(arguments,function(value){
        console.log(value);
        return true;
    });
    //apply方法改变this引用
    Array.prototype.every.apply(arguments,[function(value){
        console.log(value);
        return true;
    }],[]);
    //bind 方法改变this引用
    let temp1=Array.prototype.every.bind(arguments);
    temp1(function(value){
        console.log(value);
        return true;
    });
    Array.prototype.every.bind(arguments)(function(value){
        console.log(value);
        return true;
    });

}
printName(1,2,3); 

let obj2={
    name:"apple"
}
function printName1(a,b){
    console.log(a)
    console.log(b)
    console.log(this.name);
    console.log(arguments);
}
// printName1(1,2);
printName1.call(obj2,2,3,4,5);
printName1.apply(obj2,[2,3,4,5]);
let temp=printName1.bind(obj2);
temp(2,3,4,5);
printName1.bind(obj2)(2,3,4,5);

// 计算属性
let preson="teacher_";
let obj3={
    teacher_name:"zhangsan",
    teacher_run:function(){
        console.log("teacher is runing!")
    }
}
obj3[preson+"eat"]=function(){
    console.log("teacher is eating!")
}
//rest新参数，传数组(作为最后一个)
function printName3(a,c,...rest){
    console.log(a)
    console.log(c)
    console.log(rest)

//in下标of值
    for(const x in rest){
        console.log(x)
    }
    for(const x of rest){
        console.log(x)
    }
}
printName3(1,2,3,4)



