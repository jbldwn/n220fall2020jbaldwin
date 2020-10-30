//creating an object
var ball = { 
    x: 100, 
    y: 100,
    velocityX: 2, 
    velocityY: 2,
    update: function() {
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);
        //changes the location of the ball with the velocity
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};
var paddle = {
    x: 100, 
    y: 350, 
    w: 150, 
    h: 20,
    update: function() {
        noFill();
        stroke(143, 251, 255);
        //draws the rectangle at the specific variables, not hardcoded to allow the rectangle to change. 
        rect(this.x, this.y, this.w, this.h);
        //only is affected when the arrow key is held
        if(keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
        }if(keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }
    }
};
//an array to allow for multiple blocks. 
var blocks = [];

//creates an X and Y variable to for each interval of the array to be used later on approx line 67
for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
}
    
function setup() {
    createCanvas(400, 400);
}
    
function draw() {
    background(70);
    //calling the functions set up in each object above to allow the paddle to move, and the ball to animate
    ball.update();
    paddle.update();
    
    // prevents ball from leaving the Canvas, and allows ricochet off sides and pannel, except for bottom of the screen in the vent the paddle is missed
    if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
        ball.velocityY *= -1;
    }
    
    //draws boxes along the top
    for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20);
        
        //performs hitbox check to see if the ball hits the box, and removes it from the top. 
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1;
    
            //remove block from array
            blocks.splice(i, 1);
        }       
    }
    
}
function hitTestPoint(px, py, bx, by, bw, bh) {
    if(px > bx && px < bx + bw){
        if(py > by && py < by + bh) {
        return true;
        }
    }
    return false;
}