var i = 1;
var six ="";
var timer = setInterval(function () {
    var mm=Math.round(Math.random()*9);
	console.log(i++,mm)
    if(i<7)
    {
    six+=mm;
    }else{
        console.log(six);
     clearInterval(timer);
    } 
},1000)