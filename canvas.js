let canvas =  document.getElementById("test");// declare variables of element
let ctx = canvas.getContext("2d"); //context
let myColor = "black"; //start color of brush
let rSize = 5; //start size of brush
document.getElementById("color").oninput = function(){ //function for change brush color
    myColor = this.value;
    ctx.beginPath();
};
document.getElementById('size').oninput = function(){ //function for change brush size
    rSize = this.value;
};
canvas.onmousedown = function (event) {//main paint function fire when mouse button active
    let x = event.offsetX; // read mouse coordinates on event
    let y = event.offsetY;
    ctx.strokeStyle = myColor; // color of the built line
    ctx.lineCap = "round"; // rounding of elements
    ctx.moveTo (x,y); //start point paint line
    canvas.onmousemove = function (event) { //on move mouse function for create solid line
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineWidth = rSize; // changeable line width
        ctx.lineTo (x,y); //end coordinates of line
        ctx.stroke(); // command to "draw" everything that happened here))
    };
    canvas.onmouseup = function () { //when mouse button not active we stop draw
        canvas.onmousemove = null;
    }
};
document.getElementById('pClear').onclick = function(){ //function for clear canvas element
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
};