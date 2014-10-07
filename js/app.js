window.onload = displayTime;

//variables are d(date), h(hours), m(minutes), s(seconds)
var d, h, m, s, color;

//first you call your function
function displayTime() {
"use strict";


   var red = Math.floor( (Math.sin(+d/100000)+1) * 255/2);
   var blue = Math.floor( (Math.sin(2 * (+d/100000 + 50))+1) * 255/2);
   var green = Math.floor( (Math.sin(3 * (+d/100000 + 170))+1) * 255/2);
   
   var color = "rgba(" + red + "," + green + "," + blue + ",255)";
   var inverse = "rgba(" + (255-red) + "," + (255-green) + "," + (255-blue) + ",255)";
   
   document.getElementById('container').style.background = color;



//set your structure. 	
    d = new Date(); //new date
    h = d.getHours();// date.getHours
    m = d.getMinutes();//date.getMinutes
    s = d.getSeconds();//date.getSeconds

  //time settings prefixing with "0"
    if (h <= 9) h = '0' + h;
    if (m <= 9) m = '0' + m;
    if (s <= 9) s = '0' + s;
    
 //change bg-color????
 //
 /*
 
body.style['background-color'] =
            "rgb(" +
            convertTimeToRGB(time2).join(',') +
            ")";
*/
/*
     function convertTimeToRGB(times) {
    	

    	if(!(times instanceof Array) || times.length !== 3){
    		throw new Error("times should be an array of 3 numbers");
    	}

        var ranges = [24, 60, 60],
            result = [];

        times.forEach(function(time, index) {
            result[index] = ~~ (time / ranges[index] * 255);
        });

        return result;
    }*/
/*
   color = "rgb";
	//set background color
	document.body.style.background = rgb;
*/
/*
 function convertTimeToRGB(times){
 	var ranges = [24,60,60],
 		result = []
 	times.forEach(function(value, index){
 		result[index]  =value / ranges[index] * 255;
 	}
 
 	return result;
 }
*/


    document.getElementById("container").innerHTML = h + ":" + m + ":" + s;
 
 
    //function triggerd every second
    setTimeout(displayTime, 1000);
}

//function called
displayTime();
