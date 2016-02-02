
var ball = {
  x: 20,
  y: 200,
  size: 15,
  xspeed: 4,
  yspeed: 2,

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.xspeed; // this line is the same as: this.x = this.x + 1;
    this.y += this.yspeed; // this line is the same as: this.x = this.x + 1;

  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2 || this.x < 0 + this.size / 2)  {
    this.xspeed = this.xspeed * -1;
    };

    if (this.y > height - this.size / 2 || this.y < 0 + this.size / 2) {
    this.yspeed = this.yspeed * -1;
    };
  },

};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
