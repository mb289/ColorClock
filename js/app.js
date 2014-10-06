//variables are d(date), h(hours), m(minutes), s(seconds)
var d, h, m, s;

//first you call your function
function displayTime() {

//set your structure. 	
    d = new Date(); //new data object
    h = d.getHours();// date.getHours
    m = d.getMinutes();//date.getMinutes
    s = d.getSeconds();//date.getSeconds

    //time settings set to "0"
    if (h <= 9) h = '0' + h;
    if (m <= 9) m = '0' + m;
    if (s <= 9) s = '0' + s;
    

    document.getElementById("container").innerHTML = h + ":" + m + ":" + s;

    //function triggerd every second
    setTimeout(displayTime, 1000);
}

//function called
displayTime();
