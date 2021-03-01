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

//回调函数
