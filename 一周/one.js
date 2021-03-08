let arr=[]
console.log(arr[0]);

let arr2=[1,3,4]
console.log(arr2.length);
arr2.length=4;
console.log(arr2[4]);
arr2.length=2;
console.log(arr2[4]);

let arr3=new Array(5);

let arr4=Array(5);
console.log(arr4);
console.log(arr[0]);

let arr5=[1,2,3,4];
arr5.push(5);
console.log(arr5[4]);
arr5.pop(5);
console.log(arr5[4]);

//字面量声明一个对象
let obj1={}

console.log(typeof arr5);//输出为类型object

//将一组数变为数组=数组声明
//form方法(Array上)
let str1="abc123";
let arr6=Array.from(str1);
console.log(arr6);
//of方法(Array上)
let arr11=Array.of("abc","123",1,2,"a");
console.log(arr11);

//for遍历数值
let arr7=[1,2,3,4,5];
for(let i=0;i<arr7.length;i++){
    console.log(arr7[i]);
}

//for`in遍历对象
for(var x in arr7){
    console.log(x);//下标
    console.log(arr7[x]);//数值
}
let person={
    name:"张三",
    age:"12",
    adderss:"南昌"
};
for(let obj in person){
    console.log(person[obj])
}

//forEach(具体数组上)遍历数组
let arr8=[1,2,3,4]
//参数是回调函数
arr8.forEach(function(){})
//同上[].forEach(function(){})
//回调函数

var obj2={
    f1:function(){
        console.log("f1 function!");
        this.f2()
        obj3.f2()
    },
    f2:function(){
        console.log("f2 function!");
    }
}
var obj3={
    f2:function(){
        console.log("f2 function! obj3");
    }
}
var arr9=[1,2,3];
arr9.forEach(obj2.f1,obj2)//如果函数里有this要加第二个参数指向
//arr9.forEach(obj2.f1,obj3)//改变this含义打印obj3
// arr9.forEach(function(arg){
//     console.log(arg);
// })

//every 方法(默认false)
var arr10=[1,2,3,4]
arr10.every(function(arg){
    console.log(arg);
    return true;
});
// array.every(callback[, thisObject]);
// 下面是参数的详细信息：callback : 函数用来测试每个元素     thisObject : 对象作为该执行回调时使用
// 返回值:返回true，如果此数组中的每个元素满足所提供的测试函数。

//some 方法(默认true)
var arr12=[1,2,3,4]
arr12.some(function(arg){
    console.log(arg);
});
arr12.every(function(arg){
    console.log(arg);
});

arr12.some(function(arg,index){
    console.log("序号："+index);
    console.log(arg);
});

// every()与some()方法都是JS中数组的迭代方法。
// every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
// some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。

//map 方法 操作生成新数组
var arr13=[1,2,3,4,5,6];
var result=arr13.map(function(arg){
    return arg*arg;
})
console.log(result);
console.log(arr13);

// https://www.jb51.net/article/120220.htm


//filter 方法 过滤 操作生成新数组
var arr14=[1,2,3,4,5,6,7]
var result1=arr14.filter(function(arg){
    if(arg%2==0){
        return true;
    }
})
console.log(result1);
console.log(arr14);


//find 方法 过滤 操作生成新数组
var arr15=[1,2,3,4,5,6,7]
var result2=arr15.find(function(arg){
    if(arg==3){
        return true;
    }
})
// 同上var result2=arr15.find(arg=>arg==3)
console.log(result2);
console.log(arr15);

//findIndex 方法(输出下标)
var arr16=[1,2,3,4,5,6,7]
var result3=arr16.findIndex(arg=>arg==3)
console.log(result3);

//includes 方法 是否包含
var arr17=[1,2,3,4,5,6,7]
var result4=arr17.includes(3,1)//1为起始找下标节约时间
console.log(result4);

// sort 方法
var arr18=[1,6,4,9,0]
var result5=arr18.sort(function(a,b){
    return a-b;//b-a为降序a-b为升序
})
console.log(result5);
console.log(arr18);



//for`of 循环
