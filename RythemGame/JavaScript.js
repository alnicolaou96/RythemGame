
//function to turn one object's display to none and the other to flex
//basically to switch pages
var pageIdOne;
var pageIdTwo;

//first input is the one turning to none, second is becoming visible
function PageSwitcher(pageIdOne, pageIdTwo) {
    var x = document.getElementById(pageIdOne);
    var y = document.getElementById(pageIdTwo);
    x.style.display = "none";
    y.style.display = "flex";
}

//------------------------------

//switch from logo page to the tutorial page
function StartGame() {
    PageSwitcher("logoPage", "tutorialPage");
}

//------------------------------

// timer buttons
var timers =true;
var timeOne, timeTwo;
var timeDifferenceCounters=0;
var timeDifference;



function Timer() {
    timeDifferenceCounters++;//counter

    if (timers === true) {
        timeOne = new Date().getSeconds();
        timers = false;
    }
    else if (timers === false) {
        timeTwo = new Date().getSeconds();
        timers = true;
    }

    if (timeDifferenceCounters % 2 === 0) {
        timeDifference = timeTwo - timeOne;
    }
}
function Spacebar() {

    Timer();

    var x = document.getElementById("timerButton");

    if (x.style.backgroundColor !== "red")
        x.style.backgroundColor = "red";

    else if (x.style.backgroundColor === "red")
        x.style.backgroundColor = "blue";
}


//------------------------------



function MyMove() {
    var elem = document.getElementById("animation");
    var pos = 0;
    var id = setInterval(frame, 5);


    function frame() {
        if (pos === 350) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.left = pos + "px";
        }

    }
    console.log("working");
}
