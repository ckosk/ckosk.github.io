
function mouse_position()
    {
        var e = window.event;
        onmousemove = function(e){
            document.getElementById("coords").innerHTML = (e.clientX+"<br>"+e.clientY)}
    }