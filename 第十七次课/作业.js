//课后练习一：
//备课人：韦晓余
//备课时间：2020年11月20日
//请说出程序的运行结果：
//第一道题 请说出程序的运行结果
// var nut = function(){
//     console.log("this is nut-1")
//     return "this is nut-2"
// }
//     nut()
    

//     // 运行结果：this is nut-1

    //第二道题目 请说出程序的运行结果
    // var lichee = function (){
    //     console.log("this is lichee-1")
    //     return "this is lichee-2"
    //     }()

    

    //  //运行结果：打印的是this is lichee-1，返回值

    // var lichee = function (){
    // console.log("this is lichee-1")
    // return function (){
    //     console.log("this is lichee-2")}()
    // }()

    //第三道题目 如何让pear也能运行并输出结果  
    // var watermelon = function(){
    // console.log("this is watermelon-1")
    // return function pear(){
    // console.log("this is pear-1")
    // }
    // }
    // watermelon()();
    // var p=watermelon();
    

    // //第四道题目 请说出程序的运行结果
    // let banana = function banana(){
    // console.log("this is banana-1")
    // return ()=> function(){console.log("this is Anonymous function")}()
    // }
    // banana()()

     //运行结果：this is banana-1    
     //         this is Anonymous function

    // // //第五道题目 如何打印出 this is MyGrapNut   箭头函数
    // let grape = function redGrape(){
    //     return {
    //         name:"my name is red grape",
    //         printMyName:()=>{
    //             return ()=>{
    //                 return Object.create({
    //                     name:"my name is grape nut",
    //                     printMyGrapeNut:function(){
    //                         console.log("this is MyGrapNut")} })
    // }
    // }
    // }
    // }
    // grape().printMyName()().printMyGrapeNut()
    

    // Object.create(proto [, propertiesObject ]) 是E5中提出的一种新的对象创建方式，第一个参数是要继承的原型，如果不是一个子函数，可以传一个null，第二个参数是对象的属性描述符，这个参数是可选的。

    // //第六道题目 请说出程序的运行结果
    // var redPlum = ()=>{
    // return 100
    // }
    // var bluePlum =(blue)=>{
    // return 200 * blue()
    // }
    // var plum = (plum2,plum1)=>{
    // let result = plum1(plum2)
    // console.log(result);
    // }
    // plum(redPlum,bluePlum)

    //  //运行结果：20000

    //第七道题目 请 在console.log里面完善代码，并使得程序运行打印出
    // this is red apple 和 this is blue apple
    // let red = function readApple(){
    // return ()=>{
    // return function(){
    // return ()=>{
    // return function(){
    // console.log("this is red apple")
    // return "this is blue apple"
    // }
    // }
    // }
    // }
    // }   
    // let apple = function redApple(){
    //     console.log(red() ()()()())
    // }()

    

    // //第八道题目 请说出程序的运行结果
    // (function(x){
    // x()
    // console.log("this is yellow orange")
    // console.log(function blueOrange(){
    // console.log("this is blue orange")}() )
    // })(function(){
    // console.log("this is orange")
    // return "this is red orange"
    // })

     //运行结果：this is orange
     //         this is yellow orange
     //         this is blue orange
    //          undefined

    //第九道题目 如果想把 this is small orange 和 this is big orange 都打印出来如何操作
    //其实就是一句话
    // var blackOrange = ()=> function(){console.log("this is small orange")
    // return function(){
    // console.log("this is big orange")
    // }()

    // }()
    // blackOrange();


    //第十道题目 补充程序代码，运行打印出 9999
    // let blackberry = function (){
    //     console.log("this is blackberry")
    //     return {
    //     smallBlackberry: ()=>{
    //     console.log("this is smallBlackberry")
    //     return ()=>{
    //     console.log("this is smallBlackberry nut ")
    //     return ()=>console.log("9999")
    //     }
    //     }
    //     }
    //     }
        
    //     // blackberry().smallBlackberry()()()
    //     console.log(blackberry().smallBlackberry()()())


    // //第十一道题目 请说出程序的运行结果
    // function bigNut(func){
    // let smallNut = function (s){
    // s()
    // console.log("this is small nut")
    // return 200
    // }
    // let middleNut = function(m){
    // m()
    // console.log("this is middle nut")
    // return 300
    // }
    // return func(smallNut,middleNut)}

    // function redNut(x,y){
    // function blueNut(){
    // console.log("this is blueNut")
    // }
    // function yellowNut(){
    // console.log("this is yellowNut")
    // }
    // return ()=>{
    // console.log(x(blueNut)+y(yellowNut))
    // }
    // }

    // bigNut(redNut)()

     //运行结果：this is blueNut  this is small nut  this is yellowNut  this is middle nut  500

    // //第十二道题目(山楂)
    // var haw = (x,y)=>{
    // return ()=>{
    // x(y)
    // }
    // }
    // function lichee(li){
    // console.log(li())
    // }
    // function nut(){
    // console.log("this is nut");
    // return "this is lichee"
    // }
    // haw(lichee,nut)()

    //  //运行结果：this is nut  this is lichee