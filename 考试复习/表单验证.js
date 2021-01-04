/**
*编写一个查看字符串中是否含有数字的方法，含有数字返回false,没有数字返回true
*/
function isRealName(val){
    let flag = true ;
    console. Log(val);
    for (let i = 0; i < val.Length; i++) {
    if (val [i]==="null" ||val[i] == null) {
    return false;
    }
    if (!isNaN(val[i]) ){
    flag = false;
    console . Log(vaL[i]);
    }
    }
    return flag;
}