

function setup() {
  createCanvas(700, 400);
  noStroke();
}
function draw() {
  noStroke();
  background(240, 168, 175);
  ukebody();
  ukeneck();
  ukebodydetail();
  soundhole();
  ukebridge();
  uketuners();
  ukehead();
  fretboard();
  ukestrings();
  headstrings();
}
function ukebody(){
  fill(232, 144, 5);
  circle(550, 200, 200);
  circle(425, 200, 150);
}
function ukeneck(){
  fill(58, 45, 50);
  rect(120, 180, 270, 40);
}
function ukebodydetail(){
  fill(232, 144, 5);
  circle(390, 185, 50);
  circle(390, 215, 50);
}
function soundhole(){
  fill(251, 245, 243);
  circle(450, 200, 70);
  fill(232, 144, 5);
  circle(450, 200, 69);
  fill(251, 245, 243);
  circle(450, 200, 66);
  fill(232, 144, 5);
  circle(450, 200, 64);
  fill(58, 45, 50);
  circle(450, 200, 50);
}
function ukebridge(){
  fill(58, 45, 50);
  quad(580, 160, 580, 240, 595, 230, 595, 170);
  fill(251, 245, 243);
  rect(585, 175, 2, 50);
}
function uketuners(){
  fill(114, 125, 113);
  rect(70, 160, 3, 15);
  rect(90, 160, 3, 15);
  rect(70, 225, 3, 15);
  rect(90, 225, 3, 15);
  fill(251, 245, 243);
  ellipse(71, 164, 13, 8);
  ellipse(91, 164, 13, 8);
  ellipse(71, 236, 13, 8);
  ellipse(91, 236, 13, 8);
}
function ukehead(){
  fill(58, 45, 50);
  quad(110, 175, 120, 180, 120, 220, 110, 225);
  rect(50, 175, 60, 50);
  fill(251, 245, 243);
  rect(120, 180, 2, 40);
  
}
function fretboard(){
  fill(114, 125, 113);
  for (x=0; x<220;) {
    rect(145+x, 180, 2, 40);
    x+=25;}

}
function ukestrings(){
  fill(251, 245, 243);
  rect(120, 195, 465, 2);
  rect(120, 186, 465, 1);
  rect(120, 204, 465, 2);
  rect(120, 213, 465, 1);
}
function headstrings(){
  stroke(251, 245, 243);
  strokeWeight(1);
  line(91, 185, 120, 187);
  line(91, 215, 120, 213);
  strokeWeight(2);
  line(71, 208, 120, 206);
  line(71, 194, 120, 196);
  noStroke();
  fill(114, 125, 113);
  circle(71, 192, 6);
  circle(91, 183, 6);
  circle(71, 210, 6);
  circle(91, 217, 6);
}



