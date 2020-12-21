function City(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName=cityName;
    this.cityArea=cityArea;
    this.cityPostcode=cityPostcode;
    this.cityRegions=cityRegions;
}

var EastLake={
   orgionArea:123,
   orgionName:"东湖区",
   orgionPostcode:"123456",
}
var WestLake={
   orgionArea:231,
   orgionName:"西湖区",
   orgionPostcode:"654321",
}


City.prototype.show=function(){
    for(let i=0;i<cityRegions.length;i++){
        console.log("cityName:" + this.cityName + "cityArea:" + this.cityArea +
        "cityPostcode:" + this.cityPostcode + "cityRegions:" +this.cityRegions[i]);
    }
   
}()

var cityRegions=[EastLake,WestLake]
var city1=new City("南昌市",12345,"564545",cityRegions)
console.log(city1)
