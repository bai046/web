// 课后作业题目(20201203)：
//第一道题目 按照下面的几点要求，设计出一个构造函数
// 1、构造出一个构造函数，构造函数有4个形式参数，构造函数名为：City。
// 2、有4个形式参数(cityName,cityArea,cityPostcode,cityRegions ),城市名称为字符串类型，城市面积
// 为数值型，城市邮编为字符串类型，城市区划为数组（南昌市有 东湖区、西湖区、青山湖区、新建区等）。
// 3、城市区划数组里面的值为字面量对象类型且对象类型里面有包含属性
// （orgionName,orgionPostcode,orgionArea,名字为字符串类型，邮编为字符串类型，面积为数值型）。
// 4、需要在函数的原型上面添加函数：打印名称函数、打印城市面积函数、打印城市邮编函数，打印城市区划函数（需
// 要用到循环）。
// 6、按照构造函数的形参要求，new 出对象出来，调用原型上的函数。
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




// function city(cityName,cityArea,cityPostcode,cityRegions){
//     this.cityName=cityName,
//     this.cityArea=cityArea,
//     this.cityPostcode=cityPostcode,
//     this.cityRegions=cityRegions

//     this.cityRegions=new Array();
		
//     city.prototype.printName=function (){
//         console.log(this.cityName)
//     }
//     city.prototype.printArea=function (){
//         console.log(this.cityArea)
//     }
//     city.prototype.printPostcode=function (){
//         console.log(this.cityPostcode)
//     }

//   city.prototype.printRegions=function (){
//     // for (arr of cityRegions){
//     //     console.log(arr)        
//     // }
//     for(var i=0;i<cityRegions.length;i++){
//         console.log(cityRegions[i]+' ');
//        }
// }
    
// }
// var p=new city("南昌市",888888,'abcdef',["东湖区",'西湖区',"青山湖区","新建区","湾里区"]); 
// p.printName();
// p.printArea();
// p.printPostcode();
// p.printRegions();



// 毛同学的
//function City(cityName,cityArea,cityPostcode,cityRegions){
//     this.cityName=cityName;
//     this.cityArea=cityArea;
//     this.cityPostcode=cityPostcode;
//     this.cityRegions=cityRegions;
// }

// var EastLake={
//    orgionArea:123,
//    orgionName:"东湖区",
//    orgionPostcode:"123456",
// }
// var WestLake={
//    orgionArea:231,
//    orgionName:"西湖区",
//    orgionPostcode:"654321",
// }


// City.prototype.show=function(){
//     for(let i=0;i<cityRegions.length;i++){
//         console.log("cityName:" + this.cityName + "cityArea:" + this.cityArea +
//         "cityPostcode:" + this.cityPostcode + "cityRegions:" +this.cityRegions[i]);
//     }
   
// }()

// var cityRegions=[EastLake,WestLake]
// var city1=new City("南昌市",12345,"564545",cityRegions)
// console.log(city1)