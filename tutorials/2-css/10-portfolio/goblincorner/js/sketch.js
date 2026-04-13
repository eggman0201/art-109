//slime tutorial
// CREDITS: Patt Vira (youtube tutorial: https://www.youtube.com/watch?v=VyXxSNcgDtg&list=PL0beHPVMklwh3KNAibTZKkHjN4xILaWvE&index=4)(her code: https://editor.p5js.org/pattvira/sketches/rS3KsmJHB)

let molds = []; let num = 4000; 
let d;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  d=pixelDensity();
  
  for (let i=0; i<num; i++) {
    molds[i] = new Mold();
  }

  
}

function draw() {
  background(0,5);
  loadPixels();
  
  for (let i=0; i<num; i++){
  
  molds[i].update();
  molds[i].display();
  }
}




// eyeball p5 tutorial

let canvas;
let xPos=0;
let yPos=0;
let easing=.1;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    // canvas.style("z-index", -2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);

}

function mouseMoved() {
    // strokeWeight(0);
    // fill( (random(200, 255)), (random(200, 255)), (random(200, 255)));
    // ellipse(mouseX, mouseY, 30, 30);
}

function drawThing(_x,_y) {
    //tge eyeball part
    fill(255);
    ellipse(_x, _y, 50, 50);
    ellipse(_x - 20, _y - 10, 50, 50);

    //pupil
    fill(0o2);
    ellipse(_x + 15, _y+2, 10, 10);
    ellipse(_x - 5, _y-5, 10, 10);


    // strokeWeight(0);
    // fill( (random(200, 255)), (random(200, 255)), (random(200, 255)));
    // ellipse(mouseX, mouseY, 30, 30);
}

