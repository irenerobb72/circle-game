function init() {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  var circles = new Array()
}

function setUpCircles() {
  for (var i = 0; i < 100; i++){
    var mainCanvas = document.getElementById("myCanvas")
    var mainContext = mainCanvas.getContext('2d')
    mainContext.beginPath()
    mainContext.fillStyle = '#0000FF'
    mainContext.closePath()
    var randomX = Math.round(-200 + Math.random() * 4000)
    var randomY = Math.round(-200 + Math.random() * 4000)
    var size = 5 + Math.random() * 50
    var radius = 50 + Math.random() * 100

    if(randomX < 0 || randomX > 600) size=-size
    if(randomY < 0 || randomY > 500) size=-radius
    randomX+=size
    randomY+=radius
  }
}
