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