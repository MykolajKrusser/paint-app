let canvas =  document.getElementById("test");
let ctx = canvas.getContext("2d");
let myColor = "black";
let rSize = 5;
document.getElementById("color").oninput = function(){
    myColor = this.value;
    ctx.beginPath();
};
document.getElementById('size').oninput = function(){
    rSize = this.value;
};
canvas.onmousedown = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.moveTo (x,y);
    canvas.onmousemove = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineWidth = rSize;
        ctx.lineTo (x,y);
        ctx.stroke();
    };
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
};
document.getElementById('pClear').onclick = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
};