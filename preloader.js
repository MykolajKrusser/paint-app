let getPreLoader = document.getElementById("preLoader"); // access to the element
// changing visibility by decrementing opacity from 1 to 0 and change style element to display "none".
function fadeOut(el){
    el.style.opacity = 1; //element opacity
    let decrementOpacity = setInterval(function(){ //function for decrement element opacity from 1 to 0 and display "none"
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
            clearInterval(decrementOpacity);
            getPreLoader.style.display = "none"; //if opacity <=0.05 we stop decrement and hide element
        }
    }, 20); //every 20 milliseconds decrement opacity
}
// calling the function fadeOut.
window.onload = function loadStart(){ //use event of window loading for fire function FadeOut, which change opacity and hide pre-loader
    setTimeout(function(){
        fadeOut(getPreLoader);
    },1000); // 1 sec
};