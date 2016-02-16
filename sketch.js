var bubbles = [];

var addBubbles = function (numberOfBubbles) {
  for (var i = 0; i < numberOfBubbles; ++i) {
    bubbles[i] = new Bubble(random(0, width), random(0, height));
  }
};

var clickMouse = function () {
  //bubbles.push(new Bubble(mouseX, mouseY));
  bubbles[bubbles.length] = new Bubble(mouseX, mouseY);
  //addBubbles(500);
};

setup = function () {
  createCanvas(600, 600);
  addBubbles(500);
  // your code goes here

};

draw = function () {
  background(0);
  // your code goes here
  if (mouseIsPressed) clickMouse();
  for (var index = 0; index < bubbles.length; index = index + 1) {
    bubbles[index].update();
    bubbles[index].display();
  }
};

// we are in the 500-bubbles branch
