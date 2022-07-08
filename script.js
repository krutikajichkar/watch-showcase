var clock=document.getElementById('time');
var black=document.getElementById('black');
var red=document.getElementById('red');
var blue=document.getElementById('blue');
var pink=document.getElementById('pink');
var watch=document.getElementById('watch');
var heart=document.getElementById('heart');
var beat=document.getElementById('beat');
var heartBeat=document.getElementById('heartbeat');
var time=document.getElementById('timebtn');
var heartbtn=document.getElementById('heartbtn');

red.addEventListener("mouseover",function(){
    watch.src="images/red.png";
});

black.addEventListener("mouseover",function(){
    watch.src="images/black.png";
});

blue.addEventListener("mouseover",function(){
    watch.src="images/blue.png";
});

pink.addEventListener("mouseover",function(){
    watch.src="images/pink.png";
});

pink.addEventListener("mouseout",function(){
    watch.src="images/red.png";
});

function currentTime(){
   var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
   var sec = date.getSeconds();
    hour=updateTime(hour);
    min=updateTime(min);
    sec=updateTime(sec);
    clock.innerText= hour + ":" + min + ":" +sec;
    setTimeout(function(){currentTime()},1000);
}

function updateTime(k){
    if(k<10)
    {
        return "0"+k;
    }
    else{
        return k;
    }
}

currentTime();




time.addEventListener('click',function(){
    heartBeat.style.display="none";
    clock.style.display="block";
});

heartbtn.addEventListener('click',function()
{
    clock.style.display="none";
    beat.style.color="red";
    heart.style.color="white";
    heartBeat.style.display="block";
    heartBeat.style.marginTop="-290px";
});
