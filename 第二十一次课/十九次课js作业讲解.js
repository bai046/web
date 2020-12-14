//()()自执行函数
;(function(x){
    console.log("this is chestnut")
    return (function(x){
        console.log("this is haw")
        x()
        x.printName=function(){
            console.log("this is x.printName")
            return this.name
        }
        return 200+x.printName()+x()
    })(()=>{
        this.name=6666 
        console.log("this is pitaya")
        return 3999
        })
})()

// var x=()=>{}
// x()

function watermelon (name,price,number){
    this.name = name,
    this.price = price,
    this.number = number
    }
    watermelon.prototype.getSum = function (){
    //console.log("完善这里的代码")
    console.log(this.price*this.number)
    }
  
 //原型与原型链在于继承   
Object.tag1=100
Object.prototype.tag=200
console.log(Object.tag)


function orange(){
    console.log("this is orange")
    }
    orange.prototype= function (){
    this.name = "张三",
    this.price= 20
    getPrice= function (){return this.price}()
    console.log("this is function"+getPrice)
    }
    console.log(new orange().__proto__())


//原型链
function nut(){}
console.log(nut.prototype==new nut().__proto__)
console.log(nut.prototype.__proto__==Object.prototype)
console.log(nut.prototype.__proto__.__proto__)//出去了



//闭包:js一种现象。number在用完后仍被使用，直到被使用完才被清除
function pear(){
    var number=0;
    return function(){
        console.log(number++)
    }
}
var p1=pear()
p1() 
p1()
p1()
p1()

//较上，无闭包
function pear2(){
    var number=0
    console.log(number++)
}
pear2()
pear2()

//异步，增补网络下载图片，淘宝（先信息后图片）
+function(){
    console.log("3000前字")
    setTimeout(function(){
        console.log("3000后图")
    },3000)
}

