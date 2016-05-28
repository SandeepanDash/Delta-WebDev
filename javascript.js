var myVar;
var y,mo,da,h,mi,s;
function input()
{
var event=prompt("Enter the name of your event");
y=prompt("Enter the year");
mo=prompt("Enter the month in number(1-12)");
mo--;
da=prompt("Enter the date");
h=prompt("Enter the hour(24 hour format)");
mi=prompt("Enter the minute");
s=prompt("Enter the second"); 
s = parseInt(s);
mi = parseInt(mi);
h = parseInt(h);
da = parseInt(da);
mo = parseInt(mo);
y = parseInt(y);
document.getElementById("event").innerHTML = event + " starts in ";
func();
}
function func(){
	myVar=setInterval(start,1000);

}

function start()
{
var d = new Date();
var deadline=new Date(y,mo,da,h,mi,s);
d=d.getTime();
deadline=deadline.getTime();


	
var diff=deadline-d;

diff=Math.round(diff/1000);

 var sec=diff%60;

diff=Math.floor(diff/60);
 var min=diff%60;

diff=Math.floor(diff/60);
var hh=diff%24;

 diff=Math.floor(diff/24);
 var d=diff%30;

 diff=Math.floor(diff/noOfDays(mon));
var mon=diff%12;

var year=Math.floor(diff/12);



document.getElementById("years").innerHTML=year+"<br />"+"years";
document.getElementById("mons").innerHTML=mon+"<br />"+"months";
document.getElementById("days").innerHTML=d+"<br />"+"days";
document.getElementById("hours").innerHTML=hh+"<br />"+"hours";
document.getElementById("mins").innerHTML=min+"<br />"+"minutes";
document.getElementById("secs").innerHTML=sec+"<br />"+"seconds";

if(year==0&&mon==0&&d==0&&hh==0&&min==0&&sec==0)
{
	window.alert("Your event has started");
	

	location.reload();
}

}


function noOfDays(month)
{
	if(month==0||month==2||month==4||month==6||month==7||month==9||month==11)
	return 31;
else if(month==1)
	return 28;
else return 30;
}

function stop(){
	clearInterval(myVar);

}

function reset()
{
	stop();
	document.getElementById("secs").innerHTML=0;
	document.getElementById("mins").innerHTML=0;
	document.getElementById("hours").innerHTML=0;
	document.getElementById("years").innerHTML=0;
	document.getElementById("mons").innerHTML=0;
	document.getElementById("days").innerHTML=0;

}