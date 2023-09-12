function removeID(_id ){ 
    var e=document.getElementById(_id);
    if(e!==null) e.remove();
}

function randomWiki(){
    removeID("mainFrame");
    var iframe = document.createElement('iframe');
    iframe.src = 'https://en.wikipedia.org/wiki/Special:Random';
    document.body.appendChild(iframe);
    iframe.setAttribute("id", "mainFrame");
    iframe.style.width = "80%";
    iframe.style.height = "70%";
    iframe.style.display = "block";
    iframe.style.margin = "auto";

}