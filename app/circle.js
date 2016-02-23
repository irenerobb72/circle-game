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
  var circle3 = new createjs.Shape()
    circle3.graphics.beginFill('pink').drawCircle(0, 0, 50)
    circle3.x = 300
    circle3.y = 300
  var circle4 = new createjs.Shape()
    circle4.graphics.beginFill('lightblue').drawCircle(0, 0, 50)
    circle4.x = 50
    circle4.y = 250
  var circle5 = new createjs.Shape()
    circle5.graphics.beginFill('orange').drawCircle(0, 0, 50)
    circle5.x = 150
    circle5.y = 350
  var circle6 = new createjs.Shape()
    circle6.graphics.beginFill('lightblue').drawCircle(0, 0, 50)
    circle6.x = 50
    circle6.y = 250
  stage.addChild(circle1, circle2, circle3, circle4, circle5, circle6)
  stage.update()
}
