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
    this.cityArea=function(){
        orgionName

    }
    this.cityPostcode=cityPostcode,
    this.cityRegions=cityRegions;
    this.cityName=function(){
        console.log(this.cityName);
    }

}