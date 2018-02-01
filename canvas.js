var canvas =  document.getElementById("test");
var ctx = canvas.getContext("2d");
var myColor = "black";
document.getElementById("color").oninput = function(){
    myColor = this.value;
};

canvas.onmousedown = function () {
    canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-5, y-5, 10, 10);
        ctx.fillStyle = myColor;
        ctx.fill()
    };
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
};