//empty arrays for the X and Y locations of each brick
let bricksY = [];
let bricksX = [];

var brickVelocity = 5

function setup(){
    createCanvas(800, 600);
    background("#79a9d1");
    noStroke();
}
//records X and Y locations from each click for each brick
function mouseClicked(){
    bricksY.push(mouseY-25);
    bricksX.push(mouseX-15);
}
function draw(){
    background("#79a9d1");
    fill("#EFC7C2");
    
    //begins loop for falling bricks
    for(i=0; i < bricksY.length; i++){
    fill("#EFC7C2");
    //draws bricks
    rect(bricksX[i], bricksY[i]-brickVelocity*i, 50, 30);
    //draws bricks falling
    bricksY[i] += brickVelocity;
    //removes values too large from array
    if(bricksY[i]>800){
        bricksY.shift();
        bricksX.shift();
    }
}
}