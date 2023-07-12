
var e = window.event;
var clickCount = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var ranX = getRandomInt(10, pageWidth - 10);
var ranY = getRandomInt(10, pageHeight - 10);
console.log(ranX + " " + ranY);

$(document).ready(function () {
    const btn = document.getElementById('questionIcn');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');

    btn.addEventListener('click', () => {
        document.getElementById("popTitle").innerHTML = "CoordGuesser";
        document.getElementById("popCont").innerHTML = "Impossible difficulty random guesser game<br><br>On every page reload, a random set of page coordinates are generated. Can you locate and click them?<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        mask.classList.remove('hidden');
        modal.classList.remove('hidden');
    });

    mask.addEventListener('click', () => {
        mask.classList.add('hidden');
        modal.classList.add('hidden');
    });
    $(document).mousedown(function (e) {
        if ((e.which === 1) && (e.clientX == ranX) && (e.clientY == ranY)) {
            console.log("Click");
            document.getElementById("popTitle").innerHTML = "You found it!";
            document.getElementById("popCont").innerHTML = "Only took you " + clickCount + " clicks...";
            clickCount = 0;
            mask.classList.remove('hidden');
            modal.classList.remove('hidden');
        }
        if ((e.which === 1) && (e.clientX != ranX) && (e.clientY != ranY)) {
            clickCount++;
        }
    });
    onmousemove = function (e) {
        document.getElementById("coords").innerHTML = (e.clientX + "<br>" + e.clientY)
    }
});