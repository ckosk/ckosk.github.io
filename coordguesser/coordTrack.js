var e = window.event;
var clickCount = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x*x + y*y);
}

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var ranX = getRandomInt(10, pageWidth - 10);
var ranY = getRandomInt(10, pageHeight - 10);
console.log(ranX + ", " + ranY);

$(document).ready(function () {
    const btn = document.getElementById('questionIcn');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');

    btn.addEventListener('click', () => {
        document.getElementById("popTitle").innerHTML = "CoordGuesser";
        document.getElementById("popCont").innerHTML = "Impossible difficulty random guesser game<br><br>On every page reload, a random set of page coordinates are generated. Can you locate and click them?<br><br>(Too hard? They're also printed to the console)";
        mask.classList.remove('hidden');
        modal.classList.remove('hidden');
    });

    mask.addEventListener('click', () => {
        mask.classList.add('hidden');
        modal.classList.add('hidden');
    });
    $(document).mousedown(function (e) {
        if ((e.which === 1) && (e.clientX == ranX) && (e.clientY == ranY)) {
            document.getElementById("popTitle").innerHTML = "You found it!";
            document.getElementById("popCont").innerHTML = "Only took you " + clickCount + " clicks...<br><br><a href='https://twitter.com/share?hashtags=CoordGuesser&text=I correctly guessed the coordinate in an astounding... " +clickCount+" clicks! www.ckoski.com' target='_blank'><img src='../assets/twitter-share-button-icon.png' title='Share on Twitter'/></a>";;
            clickCount = 0;
            mask.classList.remove('hidden');
            modal.classList.remove('hidden');
        }
        if ((e.which === 1) && (e.clientX != ranX) && (e.clientY != ranY)) {
            clickCount++;
            document.getElementById("speechBubble").innerHTML = ("about " + Math.round(getDistance(e.clientX, e.clientY, ranX, ranY)) + " pixels away!");
        }
    });
    onmousemove = function (e) {
        document.getElementById("coords").innerHTML = (e.clientX + "<br>" + e.clientY)
    }
});