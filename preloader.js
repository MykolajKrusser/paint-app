let getPreLoader = document.getElementById("preLoader"); // get an element
// changing visibility by decrementing opacity from 1 to 0 and change style element to display "none".
function fadeOut(el){
    el.style.opacity = 1;
    let decrementOpacity = setInterval(function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
            clearInterval(decrementOpacity);
            getPreLoader.style.display = "none";
        }
    }, 20);
}
// calling the function fadeOut.
window.onload = function loadStart(){
    setTimeout(function(){
        fadeOut(getPreLoader);
    },1000);
};