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