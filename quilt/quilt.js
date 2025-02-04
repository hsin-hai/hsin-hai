//Sketch 4 - Lily Hsin-Hai

const quilts = [];
var gridSize;
var step;
var row;
var col;
var highlighted;
const rotations = [];

function setup() {

  createCanvas(800, 800);

  loadQuilts();

  gridSize = sqrt(quilts.length);
  step = width / gridSize;

  frameRate(10);

  rotations.push(PI/2, PI, 3*PI/2, 2*PI);

}

function draw() {

  //assigning integers to my mouse position
  row = floor(mouseX/step);
  col = floor(mouseY/step);

  //when i click the mouse it repeats the given square, when i move it it resets
  if(highlighted == null){
    tileQuilt();
  }else{
    repeatQuilt();
  }

  //highlights square
  fill(255,80);
  stroke(255);
  strokeWeight(1);
  rect(step*row, step*col, step, step);

}

function mousePressed(){

  highlighted = col*5 + row;

}

function mouseMoved(){

  highlighted = null;

}

function keyPressed() {
  if (key == ' ') {
    shuffle(quilts, true);
  }
}

function tileQuilt() {

  var x = 0;
  var y = 0;
  for (const quilt of quilts) {
    image(quilt, x, y, step, step);
    x += step;
    if (x >= width) {
      x = 0;
      y += step;
    }
  }  
}

function repeatQuilt(){

  imageMode(CENTER);
  for(x = 0; x < width; x += step){
    for(y = 0; y < height; y += step){
      push();
      translate(x + step/2, y + step/2);
      rotate(random(rotations));
      image(quilts[highlighted], 0, 0, step, step);
      pop();
    }
  }
  imageMode(CORNER);
}

function loadQuilts(){

  quilts.push(loadImage('quilts/redBorder.jpg'));
  quilts.push(loadImage('quilts/skull.jpg'));
  quilts.push(loadImage('quilts/parasol.jpg'));
  quilts.push(loadImage('quilts/lilypads.jpg'));
  quilts.push(loadImage('quilts/flores.jpg'));
  quilts.push(loadImage('quilts/figs.jpg'));
  quilts.push(loadImage('quilts/rays.jpg'));
  quilts.push(loadImage('quilts/crane.jpg'));
  quilts.push(loadImage('quilts/circles.jpg'));
  quilts.push(loadImage('quilts/abstract.jpg'));
  quilts.push(loadImage('quilts/swirl.jpg'));
  quilts.push(loadImage('quilts/sun.jpg'));
  quilts.push(loadImage('quilts/squares.jpg'));
  quilts.push(loadImage('quilts/rabbit.jpg'));
  quilts.push(loadImage('quilts/diamonds.jpg'));
  quilts.push(loadImage('quilts/anemone.jpg'));
  quilts.push(loadImage('quilts/trapezoid.jpg'));
  quilts.push(loadImage('quilts/oragami.jpg'));
  quilts.push(loadImage('quilts/moths.jpg'));
  quilts.push(loadImage('quilts/cross.jpg'));
  quilts.push(loadImage('quilts/kaleidescope.jpg'));
  quilts.push(loadImage('quilts/houses.jpg'));
  quilts.push(loadImage('quilts/flowers.jpg'));
  quilts.push(loadImage('quilts/blue.jpg'));
  quilts.push(loadImage('quilts/blobs.jpg'));

}