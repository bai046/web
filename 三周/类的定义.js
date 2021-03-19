let arr=[1,2,3,4]
// 删除数组首位
let result=arr.shift()
console.log(result);
console.log(arr);

// 把新增元素放在数组前面，原数组不改变
let result1=arr.unshift(1,2,3)
console.log(result1);
console.log(arr);

// 切片(开始，结束前)不改变原数组
let arr1=[1,2,3,4,5]
let result0=arr1.slice(2,3);
console.log(result0);
console.log(arr1);

// (开始下标，个数)改变原数组
let arr2=[1,2,3,4,5]
let result2=arr2.splice(2,3);
console.log(result2);
console.log(arr2);

// 类的定义

function Point(x,y){
    this.x=x
    this.y=y
}
Point.prototype.print=function(){
    console.log(this.x)
    console.log(this.y)
}
let point=new Point(45,67);
point.print()


class Point1{
    // 构造函数
    constructor(x,y){
        this.x=x
        this.y=y
    }
    print(){
        console.log(this.x);
        console.log(this.y);
    }
}
let point1=new Point1(45,67);
point1.print()

//比较,本质仍是函数
console.log(typeof Point)//function
console.log(typeof Point1)//function
console.log(Point1===Point.prototype.constructor);//true

class Point2{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    printName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);
    }
    printAddress(){
        console.log(this.address);
    }
}
let point2=new Point2("zhangsan",12,"nanchang");
point2.printName();


// es6 自变量形式
let point4={
    x:function x(){
        console.log("this is x")
    },
    y(){
        console.log("this is y")
    }
}
point4.x();

// 语法糖,自变量
// let obj={}
// let obj1=new Object({});


//'=='比值 '==='比较更多 'Object.is'先转对象形式再判断
console.log(1==1)//true
console.log(1===1)//true
console.log('1'==1)//true
console.log('1'===1)//false
console.log(true==1)//true
console.log(true===1)//false

console.log(Object.is(1,'1'));

//false,生成两个独立对象
console.log(Object.is({},{}))
console.log({}=={})
console.log({}==={})

function sum(a,b){
    if(!isNaN(a)||!isNaN(b)){
        console.log("wrong");
        return;
    }
    return a+b;
}
console.log(sum(1,'1'));
console.log(sum(1,1));

//Object.assign()  ，浅拷贝,暂时改变端口
// 复制，深拷贝(还关注父亲原型链)，浅拷贝(只关注本层)
let newObj=Object.assign({name:"zhangsan",age:8080},{age:"lisi"})
console.log(newObj)

//Object方法

//类的继承
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    printPoint(){
        console.log(this.x);
        console.log(this.y);
    }
}
let p1=new Point(22,33);
p1.printPoint();

//面对对象的三大主题：封装(类) 继承 多态(复用)
class redPoint extends Point{
    constructor(a,b){
        super(22,33)
        this.a=a;
        this.b=b;
    }
    printRedPoint(){
        console.log(this.a);
        console.log(this.b);
    }
}
let redpoint=new redPoint(44,55);
redPoint.printRedPoint();//44,55
redPoint.printPoint();//22,33


//解构 析构
let arr21=[1,2,3,4,5,6,7]
console.log(arr21[1]);
//数组析构
let [a,b,c,d,e]=[1,2,3,4,5,6,7]
let [,,,d,e]=[1,2,3,4,5,6,7]
console.log(d)
console.log(e)
//rest参数
let [a,b,c,...rest]=[1,2,3,4,5,6,7]
console.log(rest);

let obj2={
    name:"zhangsan",
    age:12,
    address:"nanchang"
}
let {name,age,address,score=100}=obj2
console.log(name);
console.log(age);

// 对象的嵌套解构
let obj3={
    name:"zhangsan",
    age:30,
    address:"jiangxi",
    score:{
        match:100,
        english:120
    }
}
let {name,age,address,
    score:{
        match,
        english
    }
} = obj3
console.log(match);
console.log(age);


