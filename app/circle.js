function drawCircles() {
  var stage = new createjs.Stage('demoCanvas')
  var circle1 = new createjs.Shape()
    circle1.graphics.beginFill('crimson').drawCircle(0, 0, 50)
    circle1.x = 100
    circle1.y = 100
  var circle2 = new createjs.Shape()
    circle2.graphics.beginFill('blue').drawCircle(0, 0, 50)
    circle2.x = 200
    circle2.y = 200
  stage.addChild(circle1, circle2)
  stage.update()
}
