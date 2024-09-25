let x = 400;
let y = 130;
let x1 = 400, y1 = 130; // First point of circle (400, 130)
let x2 = 270, y2 = 270; // Second point of cicle(250, 250)
let progress = 0; // Progress between the two points (starts at 0)
let speed = 0.02; // How fast the circle moves


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background (240,240,240);
}

let circleX = 0;

function draw() {
  background (240, 240, 240, 35) //translucent trail of moving circle
  
  // Update progress to animate the circle
  progress += speed; // Move the progress forward by speed
  
  // If the progress reaches 1 or 0, reverse the direction (bounce back)
  if (progress >= 1 || progress <= 0) {
    speed *= -1; // Reverse the speed direction
    background (240, 240, 240); //clearing the trail after circle hits corners
  }

  let vColor = color(30, 30, 30);
  let zColor = color(30, 30, 30);

  //drawing V
  fill(vColor);
  beginShape();//left stroke
  vertex(100, 100);
  vertex(150, 100);
  vertex(200, 300);
  vertex(150, 300);
  endShape(CLOSE);
  
  beginShape(); //right stroke
  vertex(300, 100);
  vertex(250, 100);
  vertex(200, 300);
  vertex(250, 300);
  endShape(CLOSE);
  
  //drawing Z
  fill(zColor);
  rect(250, 100, 180, 50); // Top line
  rect(250, 250, 180, 50); // Bottom line

  
  // Calculate the circle's position between the two points using lerp()
  let x = lerp(x1, x2, progress); // Interpolating x position
  let y = lerp(y1, y2, progress); // Interpolating y position
  
  fill(255, 0, 0); // Set the circle color 
  ellipse(x, y, 50, 50); // Draw the circle
 



  
}
