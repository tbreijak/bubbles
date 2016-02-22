var Bubble = function (x, y) {
  this.x = x;
  this.y = y;
};

Bubble.prototype = {

  radius: 3,

  update: function() {
    this.x += random(-1, 1);
    this.y -= (1, -2);
    if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
  },

  display: function () {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

};
