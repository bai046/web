// web最终还是工程度，复杂度，写逻辑，非样式css
//大括号是一个对象,
// //c语言
// int a = 123;

// //js 语言

// var a = 123

// var b = "123"

// var c = function apple(){
//     console.log('apple');
// }

// let d = 456

// let e = "456"

// let f = function  orange(){
//     console.log("orange");
// }


// function lemon(){
//     console.log("lemon")
// }

// lemon()

// let le = function banana(){
//     console.log("banana")
// }

// le();
// banana()

// let le2= function(){
//     console.log("banana le2")
// }

// le2()

// function apple2(){
//     let name= "apple2";
//     function apple2Son(){
//         console.log("apple2Son");
//     }
//     apple2Son()
//     return {
//         apple2Son: apple2Son
//     }
// }

// apple2().apple2Son()

// var a1 = 123

// //语法糖
// var a2 = {}
// console.log(typeof a1)
// console.log(typeof a2)

// var a3 =Object.create(null);


// var a4 = function (){

// }


//es6
//箭头函数

// var a5 = (x,y)=>{
//    console.log(x+y)
// }
// a5(5,4)
// console.log(typeof a5)

// var a5 = function apple5(){
//     console.log('apple5');
//     return 100;
    
// }()
// // apple5()

// console.log(a5);


//闭包
// (function(x,y){
//     console.log("江西软件大学")
//     console.log(x+y)
// })(3,6)



//原型
var a7=function(){
    console.log("a7 原型")
}
a7.prototype.apple=function(){
    console.log("apple");
}
a7.apple();