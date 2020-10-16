let ballVelocity = 1;

let myPaddle = {
    rectX: 700,
    rectY: 50,
    rectW: 50,
    rectH: 500,
    directionalOperator: function(){
        if (keyIsDown(UP_ARROW)) {
            this.rectY -= 10;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.rectY += 10;
        }if(this.rectY < 0){
            this.rectY = 0;
        }if(this.rectY > 600-this.rectH){
            this.rectY = 600-this.rectH;
        }
        //drawing the paddle
        fill(126, 188, 137);
        rect(this.rectX, this.rectY, this.rectW, this.rectH);
    }
}

let ball = {
    color: "#FE5D26",
    ballVelocity: 1,
    x: 350,
    y: 300,
    ballMovement: function(){
        
    }
}

function setup(){
    createCanvas(800, 600);
    background(193, 219, 179);
}

//hitbox
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            ball.ballVelocity *= 1.25
            myPaddle.rectH *= .25
            return true;
        }
   }
   return false;
}
function draw(){
    
    background(193, 219, 179);
    strokeWeight(0);
    fill(44, 54, 63);
    myPaddle.directionalOperator();

    // for(i=0; i < circlesY.length; i++){
    //     //check hitbox
    //      if (collideRect(circlesX[i], circlesY[i], 50, 450, 700, 100)){
    //          circleVelocity[i] *= -1;
    //      }
        
    //     //draws balls falling
    //     circlesY[i] += circleVelocity[i];
    //     // circlesX[i] += xVelocity;

    //     //draws balls
    //     circle(circlesX[i], circlesY[i] -circleVelocity[i], 30);
        
    //     //removes values too large from array
    //     if(circlesX[i]>820){
    //         circlesY.shift();
    //         circlesX.shift();
    //         circleVelocity.shift();
    //     }if(circlesX[i]<-820){
    //         circlesY.shift();
    //         circlesX.shift();
    //         circleVelocity.shift();
    //     }
    // }
}
