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

// class Furit{
    function Furit(){
        this.name = "Furit"
        console.log("this is furit");
    }
// }


Furit.prototype.apple= function apple(){
    console.log("this is apple");
}
var a88 = new Furit();
console.log(a88.apple())

//一点java 代码
/**
 * 
 * package test;

public class TestMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("this is java");
		Furit apple = new Furit("苹果",1);
		Furit orange = new Furit("橘子",2);		
	}

}

class Furit {
	private String name;
	private int age ;
	public  Furit(String name, int age) {
		this.name=name;
		this.age = age;
	}
	public void  printName() {
		System.out.println(this.name);
	}
}
 */

// function Person(name,height){
//     this.name=name;
//     this.height=height;
//     }
//     Person.prototype.hobby=function(){
//     return 'watching movies';
//     }
//     var boy=new Person('keith',180);
//     var girl=new Person('rascal',153);
//     console.log(boy.name); //'keith'
//     console.log(girl.name); //'rascal'
//     console.log(boy.hobby===girl.hobby); //true
