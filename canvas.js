var canvas =  document.getElementById("test");
var ctx = canvas.getContext("2d");
var myColor = "black";
var rSize = 1;
document.getElementById("color").oninput = function(){
    myColor = this.value;
    ctx.beginPath();
};
document.getElementById('size').oninput = function(){
    rSize = this.value;
};
canvas.onmousedown = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.moveTo (x,y);
    canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
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
    ctx.clearRect(0, 0, 400, 400);
};