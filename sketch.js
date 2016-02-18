var bubbles = [];
var updateAndDisplay = function(bubbles) { // this assigns our function to a variable
    bubbles.update();
    bubbles.display();
};
setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);
  bubbles.forEach(updateAndDisplay); // your code goes here
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  // for (var i = 0; i < bubbles.length; ++i) {
  //   bubbles[i].update();
  //   bubbles[i].display();
  };
