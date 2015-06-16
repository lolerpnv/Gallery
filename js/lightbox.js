function init(){
    var lightboxElements = "<div id='lightbox'>";
    lightboxElements += "<div id='overlay' class='hidden'></div>";
    lightboxElements += "<div id='next' class='hidden'></div>";
    lightboxElements += "<div id='prev' class='hidden'></div>";
    lightboxElements += "<img class='hidden' id='big-image' />";
    lightboxElements += "</div>";
    document.querySelector("body").innerHTML += lightboxElements;

    var bigImage = document.querySelector("#big-image")
    bigImage.addEventListener("click",toggle, false);
    var next = document.querySelector("#next")
    next.addEventListener("click",nextImage, false);
    var next = document.querySelector("#prev")
    next.addEventListener("click",prevImage, false);

    prepareThumbs();
}
function toggle( event ){
    window.console.log(event);
    //which image was clicked
    var clickedImage = event.target;
    var bigImage = document.querySelector("#big-image");
    var overlay = document.querySelector("#overlay");

    bigImage.src = clickedImage.src;
    //if overlay is hidden, we can assume the big image is hidden
    if ( overlay.getAttribute("class") === "hidden" ) {
        overlay.setAttribute("class", "showing");
        bigImage.setAttribute("class", "showing");
        next.setAttribute("class", "showing");
        prev.setAttribute("class", "showing");
    } else {
        overlay.setAttribute("class", "hidden");
        bigImage.setAttribute("class", "hidden");
        next.setAttribute("class", "hidden");
        prev.setAttribute("class", "hidden");
    }

}
function nextImage(event)
{
   getNextImage(1)
}
function prevImage(event)
{
    getNextImage(-1)
}
function getNextImage($off)
{
    var liElements = document.querySelectorAll("ul#images li");
    var bigImage = document.querySelector("#big-image");
    var next = document.querySelector("#next");
    var prev = document.querySelector("#prev");
    var i = 0;
    if(next.getAttribute("class") === "showing")
    {
        while ( i < liElements.length ) {
            //window.console.log(bigImage.src);
            //window.console.log(liElements[i].querySelector("img").src);
            if ( bigImage.src === liElements[i].querySelector("img").src )
            {
                if($off == 1 && i === liElements.length-1)
                    i = -1;
                else if($off == -1 && i === 0)
                    i = liElements.length;
                bigImage.src = liElements[i+$off].childNodes[0].getAttribute("src");
                break
            }
            else i++;
        }
    }
}
function prepareThumbs() {
    var liElements = document.querySelectorAll("ul#images li");
    var i = 0;
    var image, li;
    //loop through all <li> elements
    while ( i < liElements.length ) {
        li = liElements[i];
        //set class='lightbox'
        li.setAttribute("class", "lightbox");
        image = li.querySelector("img");
        //register a click event handler for the <img> elements
        image.addEventListener("click", toggle, false);
        i += 1;
    }
}
document.addEventListener("DOMContentLoaded", init, false);