let score = 0

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
    ballVelocityX: 2,
    ballVelocityY: 2,
    x: 350,
    y: 300,
    ballMovement: function(){
        fill(this.color);
        this.x -=this.ballVelocityX
        this.y -=this.ballVelocityY

        //setting boundries
        if(this.y <0){
            this.ballVelocityY*=-1;
        }if(this.y > 600){
            this.ballVelocityY*=-1;
        }if(this.x <0){
            this.ballVelocityX*=-1;
        }if (collideRect(this.x, this.y, myPaddle.rectX, myPaddle.rectY, myPaddle.rectW, myPaddle.rectH)){
            this.ballVelocityX*=-1;

        //resets if ball goes off screen
        }if(this.x > 800){
            this.ballVelocityX= 2;
            this.ballVelocityY= 2;
            this.x= 350;
            this.y= 300;
            myPaddle.rectX= 700;
            myPaddle.rectY= 50;
            myPaddle.rectW= 50;
            myPaddle.rectH= 500;
            score=0;
        }
        circle(this.x, this.y, 30);
        
        
        
    }
}

function setup(){
    createCanvas(800, 600);
    background(193, 219, 179);
}

//score diplay
function displayScore(){
    fill("#FE5D26");
    textSize(20)
    text("Score: " + score, 10, 25);
}

//hitbox
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            ball.ballVelocityY *= -1.75;
            myPaddle.rectH *= .75;
            score+= 10;
            return true;
        }
   }
   return false;
}
function draw(){
    fill(44, 54, 63); 
    background(193, 219, 179);
    noStroke();
    displayScore();
    myPaddle.directionalOperator();
    ball.ballMovement();
}
