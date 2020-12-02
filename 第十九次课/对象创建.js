function Pear(name,price,origin,weight){
    this.name=name,
    this.price=price,
    this.origin=origin,
    this.weighweoght;
    this.printName=function(){
        console.log("this is pear" + this.name)
    }
}
Pear.prototype.printName2=function(){
    console.log("printName2")
}

var p1=new Pear("pear",112,"xi",10)
p1.printName()
p1.printName2()



//原型设置流程
function Object2(){
    this.__proto2__=Object2.prototype2
}
Object2.prototype2={
    __proto2__:null,
    constructor:Object2,
    prototype2:Object2.prototype2
};

var obj1=new Object2()
console.log(obj1.__proto2__.__proto2__)

function Function2(){

}
Function2.prototype2={

}

//模板字符串
function pear2(name){
    return"this is"+`${name}!`
}
console.log(pear2("桃子"))

