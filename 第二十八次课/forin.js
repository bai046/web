var temp={
    name:"张三",
    age:18,
    address:"南昌"
}
for (const key in temp) {
    console.log(temp[key])
}
//forin回车生成
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


var i = 1;
var six ="";
var timer = setInterval(function () {
    var mm=Math.round(Math.random()*9);//随机生成0~9内数字
	console.log(i++,mm)
    if(i<7)
    {
    six+=mm;//拼接
    }else{
    six+=mm;//拼接

     clearInterval(timer);//关闭计时器
    } 
    console.log(six);
},500)