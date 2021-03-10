//rest新参数，传数组(作为最后一个)
function printName3(a,c,...rest){
    console.log(a)
    console.log(c)
    console.log(rest)

//in下标of值
    for(const x in rest){
        console.log(x)
    }
    for(const x of rest){
        console.log(x)
    }
}
printName3(1,2,3,4)