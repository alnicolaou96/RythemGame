function StartGame() {
    var x = document.getElementById("logoPage");
    var y = document.getElementById("tutorialPage");
    x.style.display = "none";
    y.style.display = "flex";

}



var timers =true;
var timeOne, timeTwo;
var timeDifferenceCounters=0;
var timeDifference;



function Timer() {
    timeDifferenceCounters++;

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

    var x = document.getElementById("logo");

    if (x.style.backgroundColor !== "red")
        x.style.backgroundColor = "red";

    else if (x.style.backgroundColor === "red")
        x.style.backgroundColor = "blue";
}
