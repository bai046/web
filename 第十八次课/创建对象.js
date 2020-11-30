var li1=function lichee(){
    console.log("lichee")
}
//lichee()
//li1()

//+/-/~/!/void
void function haw(){
    console.log("haw")
}

//感叹号使整形强制转成Boolean型，也可换成void
let h2=!function test(){
    console.log("h2")
    return 0;//0true  其他false
}()
console.log(h2);

let h2=void function test(){
    console.log("h2")
    return 1;
}()
console.log(h2);

//数组可嵌套函数，类型可不同



//是一种函数形式
var pi =function pitaya(){

}

//是二种函数形式（重，`${传参，可多个} `里的模板字符串）反引号：英文状态~  
//大写Function是大函数，为一个对象
let pea1='return '+'`我是一个${name}`';
let peanut5=new Function('name',pea1);
console.log(peanut5("字符串模板"))
//return后有空格，仿下；
var peanut5=function(name){
    return "我是一个"+name;
}
console.log(peanut5("字符串模板"))


//对象创建
let melon={}
let melon2={
    name:"甜瓜",
    price:30,
    weight:2,
    origin:"海南",
    color:false,
    nut:{
        name:"甜瓜的种子",
        price:40
    },
    printPrice:function(){
        console.log("我是价格")
    },
    printOrigin:()=>{
        console.log("原产地")
    }
}

//Object是js里内置的类似构造函数
var melon3=new Object()
var melon4=new Object({})
var melon5=new Object({48-61})

var melon6=new Object(666);
// function Object1(x){
//     x();
//     return 666;
// }

//重难点：原型prototype
function Person(name,sex,age,address){
    this.name=name,
    this.sex=sex,
    this.age=age,
    this.address=address
    this.sayName=function(){
        console.log(this.name);
    }
}
//写在原型上
Person.prototype.sayName2=function(){
    console.log("this is say name 2")
}

var p1=new Person("张三",'男',20,"南昌")//new出一个对象
console.log(p1);
console.log(p1.__proto__);//两个下划线，原型在对象里
p1.sayName()
p1.sayName2()

