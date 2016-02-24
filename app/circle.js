function init() {
  var mainCanvas = document.getElementById("myCanvas");
  var mainContext = mainCanvas.getContext('2d');
  mainContext.beginPath()
  mainContext.fillStyle = "#0000FF"
  mainContext.arc(100, 100, 20, 0, Math.PI*2, true)
  mainContext.closePath()
  mainContext.fill()
}
