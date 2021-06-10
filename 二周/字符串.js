//for`of 循环
var arr=["a","b","c","d"]
//for of与for in区别
//2,输出不同
for(const iterator of arr){
    console.log(iterator);
}
for(x in arr){
    console.log(x)
    console.log(arr[x])
}

var obj=[{name:"pitaya",price:20},
{name:"apple",price:30},
{name:"orange",price:40},
{name:"peach",price:50}
]

for(const iterator of obj){
    console.log(iterator.name+""+iterator.price);
}


Object.prototype.color="red";
var obj1={
    name:"apple",
    price:20,
    address:"nachang"
}
//1，可以循环对象
for(var o in obj1){
    console.log(o)
}
//forin+Enter
for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];
        console.log(element)
    }
}

//不可以
for(const iterator of obj1){
    console.log(iterator);
}


//字符串转换
var num=19;
console.log(typeof num);
var numString=num.toString();
console.log(typeof numString)

//字符串分割
length=2;
var something ="jiangxi,software,university";
var somethingSplit=something.split(",",length)//分割标志，位数
console.log(somethingSplit);
console.log(length);
console.log(somethingSplit.length);

//检索子字符串
var name1 ="software,jiangxi,software,university";
var result0=name1.indexOf("software");
console.log(result0);
var result=name1.indexOf("software",0);//0指定开始下标
console.log(result);
var result2=name1.indexOf("software",1);//1指定开始下标
console.log(result2);
var result1=name1.lastIndexOf("software");//last含义最后一次出现的索引
console.log(result1);



//字符串替换
var name2 ="software,jiangxi,software,university";
var result3=name2.replace("software","hardware").replace("software","hardware");
console.log(result3);


var name3 ="software,jiangxi,software,university";
result4=name3.charAt(5);
console.log(result4);
result5=name3.charCodeAt(5);//unicode 编码
console.log(result5);//a->97

//拼接
name4="app";
name5="le";
var result6=name4+name5;
console.log(result6);
var result7=name4.concat(name5);
console.log(result7);

//切割
var name6="apple,banana,peach";
let result8=name6.slice(1,3);
console.log(result8);
let result9=name6.substr(1,3);
console.log(result9);
let result10=name6.substring(1,3);
console.log(result10);

//大小写转换
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
console.log(text2);
var text3 = text1.toLowerCase();  // text3 是被转换为小写的 text1
console.log(text3);

//比较(同0)
var name7="apple"
var name8="apple"
var name9="banana"
var result11=name7.localeCompare(name8);
console.log(result11)
var result12=name7.localeCompare(name9);
console.log(result12)

