// This tutorial is built on the written tutorial on Object-Oriented Programming by Haocheng (Jason) Lu.

let balls = [];

// configuration
let NUM_OF_BALLS = 5;
let BALL_RADIUS = 20;

function setup() {
  createCanvas(400, 400);
  createBalls();
}

function draw() {
  background(220);
  
  // display # of balls on canvas
  push();
  fill(0);
  text(`# of Balls: ${balls.length}`, 0, 25);
  pop();

  // update and display balls
  for (let ball of balls) {
    ball.update();
    ball.display();
  }
}

function createBalls() {
  for (let i = 0; i < NUM_OF_BALLS; i++) {
    // generate random values for the properties of a ball (except fixed radius)
    let radius = BALL_RADIUS;
    let x = random(radius, width - radius);
    let y = random(radius, height - radius);
    let speedX = random(-3, 3);
    let speedY = random(-3, 3);
    
    // create a new ball and add it to the array
    let ball = new Ball(x, y, radius, speedX, speedY);
    balls.push(ball);
  }
}

class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    // update position based on speed
    this.x += this.speedX;
    this.y += this.speedY;
    
    // if the ball hits the borders of the canvas, bounce back with speed unchanged
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
