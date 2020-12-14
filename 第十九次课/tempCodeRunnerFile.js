function city(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName=cityName,
    this.cityArea=cityArea,
    this.cityPostcode=cityPostcode,
    this.cityRegions=cityRegions

    this.cityRegions=new Array();
		
    city.prototype.printName=function (){
        console.log(this.cityName)
    }
    city.prototype.printArea=function (){
        console.log(this.cityArea)
    }
    city.prototype.printPostcode=function (){
        console.log(this.cityPostcode)
    }

  city.prototype.printRegions=function (){
    // for (arr of cityRegions){
    //     console.log(arr)        
    // }
    for(var i=0;i<cityRegions.length;i++){
        console.log(cityRegions[i]+' ');
       }
}
    
}
var p=new city("南昌市",888888,'abcdef',["东湖区",'西湖区',"青山湖区","新建区","湾里区"]); 
p.printName();
p.printArea();
p.printPostcode();
p.printRegions();