var mainCanvas = document.getElementById("myCanvas")
var mainContext = mainCanvas.getContext('2d')
var circles = new Array()

function createCircles () {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  mainContext.beginPath()
  var circles = mainContext.arc(Math.random() * (50 - 5) + 5 )
  var speed = mainContext
  var radius = mainContext
  mainContext.closePath()
}
