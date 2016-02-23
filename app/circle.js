function drawCircles() {
  var stage = new createjs.Stage('demoCanvas')
  var circle = new createjs.Shape()
  circle.graphics.beginFill('crimson')
  circle.graphics.drawCircle(0, 0, 50)
  circle.graphics.fillStyle = 'rgba(185, 211, 238'
  circle.x = 100
  circle.y = 100

  stage.addChild(circle)
  stage.update()
}
