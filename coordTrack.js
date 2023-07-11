
var e = window.event;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var ranX = getRandomInt(10, pageWidth-10);
var ranY = getRandomInt(10, pageHeight-10);
console.log(ranX + " " + ranY);

$(document).ready(function() {
    $(document).mousedown(function(e) {
        if ((e.which === 1) && (e.clientX == ranX) && (e.clientY == ranY)) {
            console.log("Click");
            alert("Lorem Ipsum");
        }
    });
    onmousemove = function(e){
        document.getElementById("coords").innerHTML = (e.clientX+"<br>"+e.clientY)}
  });

  function messAl(){
    alert("lorem ipsum");
  }