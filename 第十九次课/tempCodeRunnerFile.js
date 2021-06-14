function city(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName=cityName,
    this.cityArea=cityArea,
    this.cityPostcode=cityPostcode,
    this.cityRegions=cityRegions

    var cityRegions = new Array();
    var obj = {orgionName: '东湖区',
    orgionPostcode: 'abcdef',
    orgionArea:1000};
    cityRegions[cityRegions.length] = obj;
    cityRegions = [{orgionName: '东湖区',
                orgionPostcode: 'abcdef',
                orgionArea:1000},
            {orgionName: "西湖区",
            orgionPostcode: 'abcdef',
            orgionArea:1000},
            {orgionName: "青山湖区",
            orgionPostcode: 'abcdef',
            orgionArea:1000}];
		


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
        
        console.log(cityRegions[i].orgionName+' '+cityRegions[i].orgionPostcode+' '+cityRegions[i].orgionArea+' ');
       }
}
    
}
  
var p=new city("南昌市",888888,'abcdef',);
p.printName();
p.printArea();
p.printPostcode();
p.printRegions();