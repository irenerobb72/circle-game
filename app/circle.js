var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext('2d');
var circles = new Array();

function init() {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  setInterval(setUpCircles, 10)
}
