var bubblepit = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(0);
  //iterateFunctionally(ballpit);
  iterateWithWhileLoop(ballpit);
  //iterateWithForLoop(bubblepit);
  //bubblepit.push(new Bubble (100,100));
  if (this.bubblepit < 500) bubblepit.push (new Bubble (100, 100));
};

//var iterateFunctionally = function (array) {
  //array.forEach(updateAndDisplay);
//};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
  updateAndDisplay(array[index]);
    ++index;
  }
};

var iterateWithForLoop = function (array) {
  for (var i = 0; i < bubblepit.length; ++i) {
    updateAndDisplay(array[i]);
  }
};
