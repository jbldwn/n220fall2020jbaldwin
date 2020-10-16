let circlesX = [];
let circlesY = [];
// let circleVelocity = 5;


function setup(){
    createCanvas(800, 600);
    background(121, 173, 220);
}

//records X and Y locations from each click for each Ball
function mouseClicked(){
    circlesY.push(mouseY);
    circlesX.push(mouseX);
}
function draw(){
    let circleVelocity = 5;
    
    background(121, 173, 220);
    strokeWeight(0);
    fill(44, 54, 63);
    rect(50, 450, 700, 100);

    for(i=0; i < circlesY.length; i++){
        
        fill("#008148");
        let xVelocity = 0;
        //calculating xVelocity
        if(circlesX[i+1]-circlesX[i] >= 0){
            xVelocity = circlesX[i-1]-circlesX[i];
        }if(circlesX[i+1]-circlesX[i] < 0){
            xVelocity = circlesX[i-1]-circlesX[i];
        }else{
            xVelocity = 1
        }
        //draws balls falling
        circlesY[i] += circleVelocity;
        circlesX[i] += xVelocity;

        //hitbox
        function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
            if(circleX > rectX && circleX < rectX + rectW) {
                if(circleY > rectY && circleY < rectY + rectH) {
                    circleVelocity *= -2;
                      return true;
                }
           }
           return false;
       }
        //check hitbox
        collideRect(circlesX[i], circlesY[i], 50, 450, 700, 100);

        //draws balls
        circle(circlesX[i], circlesY[i] -circleVelocity, 30);

        //removes values too large from array
        if(circlesX[i]>820){
            circlesY.shift();
            circlesX.shift();
        }if(circlesX[i]<-820){
            circlesY.shift();
            circlesX.shift();
        }
    }
}
