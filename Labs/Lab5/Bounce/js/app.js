let circlesX = [];
let circlesY = [];
let rectX = 50;
    let rectY = 450;
    let rectW = 450;
    let rectH = 100;
    let circleVelocity = [];

function setup(){
    createCanvas(800, 600);
    background(121, 173, 220);
}

//records X and Y locations from each click for each Ball
function mouseClicked(){
    circlesY.push(mouseY);
    circlesX.push(mouseX);
    circleVelocity.push(3);
}
//hitbox
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            return true;
        }
   }
   return false;
}
function draw(){
    
    background(121, 173, 220);
    strokeWeight(0);
    fill(44, 54, 63);
    rect(50, 450, 700, 100);

    for(i=0; i < circlesY.length; i++){
        //check hitbox
         if (collideRect(circlesX[i], circlesY[i], 50, 450, 700, 100)){
             circleVelocity[i] *= -1;
         }
        
        //draws balls falling
        circlesY[i] += circleVelocity[i];
        // circlesX[i] += xVelocity;

        //draws balls
        circle(circlesX[i], circlesY[i] -circleVelocity[i], 30);
        
        //removes values too large from array
        if(circlesX[i]>820){
            circlesY.shift();
            circlesX.shift();
            circleVelocity.shift();
        }if(circlesX[i]<-820){
            circlesY.shift();
            circlesX.shift();
            circleVelocity.shift();
        }
    }
}
