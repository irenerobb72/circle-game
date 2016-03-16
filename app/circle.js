var mainCanvas = document.getElementById("myCanvas")
var mainContext = mainCanvas.getContext('2d')
var circles = new Array()

function init() {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  setInterval(setUpCircles, 10)
}

function setupCircles() {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  for (var i = 0; i < 100; i++) {
    var randomX = Math.round(-200 + Math.random() * 4000)
    var randomY = Math.round(-200 + Math.random() * 4000)
    var speed = 0.2 + Math.random() * 9
    var size = 5 + Math.random() * 50
    var radius = 50 + Math.random() * 100
    mainContext.beginPath()
    mainContext.arc(this.xPos + Math.cos(this.counter / 200) * this.radius,
                  this.yPos + Math.sin(this.counter / 200) * this.radius,
                  this.width,
                  0,
                  Math.PI * 3,
                  false)
    mainContext.closePath()
    }
  }
setupCircles()
