var a;
var b;
var c;

var s = 500;
var m = 1000;
var speed = 1;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  //background(60,128,230);
  background(0,0, a);
  
  if ((s > 0) && (s < 500)) {
  
    a = c
  }
  
  if ((s > -555) && (s < 0)) {
  
    a = b
  }
  
  
//SUN
  fill (255, 240,102);
  ellipse (210, s, 100, 100);
  
  s = s - speed
  
  if (s <= -555){
   s = 500;
  } 
  
  c = (-1.8*(s-300));
  
//MOON
  fill (240);
  ellipse (210, m, 100, 100);
  
  m = m - speed
  
  if (m <= -555){
   m = 500;
  } 
  
  b = -300+m*1.8;
  
//MOUNTAINS
//further mountain
  fill(91, 71, 110);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);
  
  fill(213, 212, 255);
  strokeWeight(0);
	beginShape();
		vertex(360, 130);
		vertex(485, 246);
		vertex(390, 200);
		vertex(360, 250);
  	vertex(320, 217);
  	vertex(225, 255);
	endShape(CLOSE);
//closer one
  fill(174, 139, 222);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);
  
  fill(231, 241, 255);
  strokeWeight(0);
	beginShape();
		vertex(100, 180);
		vertex(225, 280);
		vertex(145, 250);
		vertex(120, 290);
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
//HILLS
  fill(60, 145, 57);
	ellipse(50, 580, 1000, 400);
  
  fill(69, 168, 66);
  ellipse(440, 600, 1000, 400);

}
//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}
function draw() {

  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  //light blue background if sun is above horizon

  //with if-else statement

  if (sunHeight < horizon) {
    background("lightblue"); // blue sky if above horizon
  } else {
    background(0); // night sky otherwise
  }

  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('green');
  line(0,horizon,400,horizon);

  //grass

  fill("green");

  rect(0, horizon, 400, 400);

}