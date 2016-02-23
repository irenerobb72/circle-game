function drawCircle() {
  var stage = new createjs.Stage("demoCanvas");
  var circle = new createjs.Shape();
  circle.graphics.beginFill("Crimson").drawCircle(0, 0, 100);
  circle.x = 300;
  circle.y = 300;
  stage.addChild(circle);
  stage.update()
}
