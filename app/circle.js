var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext('2d');
var circles = new Array();

function init() {
  var mainCanvas = document.getElementById("myCanvas")
  var mainContext = mainCanvas.getContext('2d')
  setInterval(setUpCircles, 10)
}

function Circle(radius, speed, width, xPos, yPos) {
  this.radius = radius;
  this.speed = speed;
  this.width = width;
  this.xPos = xPos;
  this.yPos = yPos;
  this.opacity = 0.5 + Math.random() * 0.5;
  this.counter = 0;

var signHelper = Math.floor(Math.random() * 2);
  if (signHelper == 1) {
    this.sign = -1;
  } else {
    this.sign = 1;
   }
}

Circle.prototype.update = function () {
  this.counter += this.sign * this.speed;

  mainContext.beginPath();
  mainContext.arc(this.xPos + Math.cos(this.counter / 200) * this.radius,
                  this.yPos + Math.sin(this.counter / 200) * this.radius,
                  this.width,
                  0,
                  Math.PI * 3,
                  false);
  mainContext.closePath();
  mainContext.fillStyle = 'rgba(0, 255, 255,' + this.opacity + ')';
  mainContext.fill();
};

function setupCircles() {
  for (var i = 0; i < 100; i++) {
    var randomX = Math.round(-200 + Math.random() * 4000);
    var randomY = Math.round(-200 + Math.random() * 4000);
    var speed = 0.2 + Math.random() * 9;
    var size = 5 + Math.random() * 50;
    var radius = 50 + Math.random() * 100;
    var circle = new Circle(radius, speed, size, randomX, randomY);
    circles.push(circle);
    }
    drawAndUpdate();
  }

setupCircles();

  function drawAndUpdate() {
    mainContext.clearRect(0, 0, 1000, 1000);
    for (var i = 0; i < circles.length; i++) {
      var myCircle = circles[i];
      myCircle.update();
    }
}
