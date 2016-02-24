var x = 100
var y = 200
var dx = 5
var dy = 5

function init() {
  var mainCanvas = document.getElementById("myCanvas");
  var mainContext = mainCanvas.getContext('2d');
  setInterval(draw, 10)
}

function draw() {
  var mainCanvas = document.getElementById("myCanvas");
  var mainContext = mainCanvas.getContext('2d');
  mainContext.clearRect(0, 0, 700, 700)
  mainContext.beginPath()
  mainContext.fillStyle = "#0000FF"
  mainContext.arc(x, y, 20, 0, Math.PI*2, true)
  mainContext.closePath()
  mainContext.fill()
  if(x < 0 || x > 600) dx=-dx
  if(y < 0 || y > 500) dy=-dy
  x+=dx;
  y+=dy;
}
