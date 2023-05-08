var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")

var wm = document.getElementById("w-minutes")
var ws = document.getElementById("w-seconds")

var bm = document.getElementById("b-minutes")
var bs = document.getElementById("b-seconds")

var counter = document.getElementById("counter")


//store a reference to a timer variable

var startTimer;

start.addEventListener("click", function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else{
        alert("Timer is already running");
    }
})

reset.addEventListener("click", function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText ="0"
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener("click", function(){
    stopInterval()
    startTimer = undefined;
})

//Start timer function

function timer(){
    //Work timer countdown
    if(ws.innerText !=0){
        ws.innerText--;

    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break timer countdown

    if(wm.innerText = 0 && ws.innerText == 0){
        if(bs.innerText !=0){
            bs.innerText--;

        } else if(bm.innerText !=0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed

    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "0";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById("counter").innerText++;
    }
}

//Stop timer function
function stopInterval(){
    clearInterval(startTimer);
}

