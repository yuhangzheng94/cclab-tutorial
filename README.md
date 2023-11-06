## Motivation 
Hi! This is Yuhang, currently a super senior studying IMA/CS. I have served as Learning Assistant for Creative Coding Lab for two semesters and Interaction Lab for a semester. Over the years students (and I) have run into similar problems when they try to make mini games with multiple levels or interactive stories with multiple scenes in p5.js/Processing, like "How do I move to the next scene?" So I decided to make a tutorial about how I approach this problem from scratch. I hope it helps!

## Objectives
Upon completion of this tutorials, students will:
- Review techniques covered in previous lectures, including key/mouse interaction, collision detection, and Object-Oriented Programming,
- Be able to use global variables and if statements for scene management,
- Be able to decouple "appearance" (what we draw on the canvas) and "essence" (the underlying variables that control it) and understand why we use both `update()` and `display()` methods in a class, and
- Develop problem-solving mindset.

## Step 1: Create a single-level game
This step is built on [LA Jason's tutorial on OOP](https://github.com/LuHC409/Tutorial/tree/main/LATutor#oop) in Week 9.
### 1.1 Create a sketch with bouncing balls.
We start by declaring a `Ball` class.
```javascript
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
```
Then we instantiate ball objects upon setup. To facilitate the process, I write a function called `createBalls()` and call it in `setup()`. 
```js
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
```

Note that I declare `NUM_OF_BALLS` and `BALL_RADIUS` at the beginning of the program and reference them when creating balls. This way, I don't have to go find messy implementation details down there (especially when the program gets super long) and only need to change the values up front.

The following code snippet displays a message on canvas, stating the number of balls. This can be helpful for debugging as well as for users to check out their progress.
```js
// display # of balls on canvas
push();
fill(0);
text(`# of Balls: ${balls.length}`, 0, 25);
pop();
```
Demo: 

![](/images/demo_1_1.mp4)


Code available here: https://editor.p5js.org/ztothey2dah/sketches/xsLD3Csyq


### 1.2 Add mouse interaction so that it disappears upon click.

## Step 2: Insert “Start” and “All Clear” pages

### 2.1 Build a prototype for scene management using global variables and if statements

### 2.2 Incorporate the prototype with our game.

## Step 3: Expand the game to multiple levels!

## Step 4 (advanced): Add timer and HP to the game

BUT (there’s always a but) don’t let this practice hold back your imagination and creativity! 
